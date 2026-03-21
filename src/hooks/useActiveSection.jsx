import React from "react";

// src/hooks/useActiveSection.jsx
const useActiveSection = (sectionIds) => {
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);
  return active;
};

export default useActiveSection;
