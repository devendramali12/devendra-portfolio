import React from "react";

const Toast = ({ message, type = "success", onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "rgba(16, 185, 129, 0.15)",
    error: "rgba(248, 113, 113, 0.15)",
    info: "rgba(99, 102, 241, 0.15)",
  }[type];

  const textColor = {
    success: "#10B981",
    error: "#F87171",
    info: "#06B6D4",
  }[type];

  const icon = {
    success: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    info: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  }[type];

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        padding: "14px 18px",
        borderRadius: 10,
        background: bgColor,
        border: `1.5px solid ${textColor}`,
        color: textColor,
        display: "flex",
        alignItems: "center",
        gap: 12,
        zIndex: 9999,
        animate: "slideInRight 0.3s ease",
        fontSize: 14,
        fontWeight: 500,
        maxWidth: 320,
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ flexShrink: 0, display: "flex" }}>{icon}</div>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
