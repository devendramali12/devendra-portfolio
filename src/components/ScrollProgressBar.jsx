// src/components/ScrollProgressBar.jsx
import React from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 9999,
        background: "var(--border)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "var(--accent)",
          transition: "width 0.1s linear",
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
