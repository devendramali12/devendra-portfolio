// src/components/CustomCursor.jsx
import React from "react";

const CustomCursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const mouse = React.useRef({ x: 0, y: 0 });
  const ring = React.useRef({ x: 0, y: 0 });
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
    };
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    let raf;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
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
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#2563EB",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 6px rgba(37,99,235,0.8)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99998,
          width: hovered ? 56 : 36,
          height: hovered ? 56 : 36,
          borderRadius: "50%",
          border: "2px solid rgba(37,99,235,0.5)",
          background: hovered ? "rgba(37,99,235,0.08)" : "transparent",
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s ease, height 0.25s ease, background 0.2s",
        }}
      />
    </>
  );
};

export default CustomCursor;
