// src/components/CustomCursor.jsx
import React from "react";

const CustomCursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const mouse = React.useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 1024) return;
    setVisible(true);
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px";
        ringRef.current.style.top = e.clientY + "px";
      }
    };
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!visible) return null;
  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#06B6D4",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 4px rgba(6, 182, 212, 0.6)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99998,
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          borderRadius: "50%",
          border: "2px solid rgba(6, 182, 212, 0.4)",
          background: hovered ? "rgba(6, 182, 212, 0.06)" : "transparent",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, background 0.15s",
        }}
      />
    </>
  );
};

export default CustomCursor;
