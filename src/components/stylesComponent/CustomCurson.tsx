import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursorDot");

    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      cursor.classList.add("show");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("show");
    };

    const handleMouseEnter = () => {
      cursor.classList.add("show");
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Make cursor bigger when hovering interactive elements
      if (target.closest("a, button, input, textarea, select, summary")) {
        cursor.classList.add("big");
      } else {
        cursor.classList.remove("big");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div className="cursor-dot" id="cursorDot" />;
};

export default CustomCursor;
