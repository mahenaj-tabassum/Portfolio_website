const BackgroundEffects = () => {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute -top-24 -left-20 w-[28rem] h-[28rem] rounded-full float-a"
        style={{
          background:
            "radial-gradient(circle, rgba(51,85,244,.30), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div
        className="absolute top-1/4 -right-24 w-[26rem] h-[26rem] rounded-full float-b"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.22), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/3 w-[22rem] h-[22rem] rounded-full float-a"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.20), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute bottom-10 -left-16 w-[24rem] h-[24rem] rounded-full float-b"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.24), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full float-a"
        style={{
          background:
            "radial-gradient(circle, rgba(51,85,244,.28), transparent 70%)",
          filter: "blur(55px)",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
