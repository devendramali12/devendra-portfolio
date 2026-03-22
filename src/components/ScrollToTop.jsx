import React from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--accent)",
        border: "none",
        cursor: "pointer",
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "0 8px 24px rgba(99, 102, 241, 0.35)",
        color: "#fff",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(99, 102, 241, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(99, 102, 241, 0.35)";
      }}
    >
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
