import { useEffect } from "react";

const DEFAULT_TITLE = "Mahenaj Tabassum Powshi";

/**
 * Sets the browser tab title for the current page.
 * Call with no argument to restore the default (home) title.
 */
export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Mahenaj` : DEFAULT_TITLE;
  }, [title]);
}
