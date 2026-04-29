// src/components/Navbar.jsx
import React from "react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          padding: "0 clamp(20px, 4vw, 48px)",
          background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(6, 182, 212, 0.08)" : "none",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px 0",
            flexShrink: 0,
            position: "relative",
          }}
          aria-label="Home"
        >
          {/* Ring decoration */}
          <div
            style={{
              position: "absolute",
              top: -4,
              left: -12,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1.5px solid var(--accent)",
              opacity: 0.6,
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 4,
                left: -3,
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 10px var(--accent)",
              }}
            />
          </div>

          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-0.04em",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
              boxShadow: "0 8px 20px rgba(6, 182, 212, 0.25)",
            }}
            className="nav-logo"
          >
            DM
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1,
            }}
            className="nav-brand"
          >
            Devendra<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 2 }}
          className="nav-links-desktop"
        >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: active === id ? 600 : 400,
                fontFamily: "'Inter', sans-serif",
                color:
                  active === id
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                padding: "8px 14px",
                borderRadius: 8,
                transition: "all 0.15s",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                if (active !== id)
                  e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                if (active !== id)
                  e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="mailto:devendraa.mali12@gmail.com"
            className="btn-primary"
            style={{ marginLeft: 12, padding: "9px 20px" }}
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "1px solid var(--border-strong)",
            cursor: "pointer",
            padding: "9px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            borderRadius: 8,
            transition: "border-color 0.2s",
          }}
          className="nav-hamburger"
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent-border)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-strong)")
          }
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                height: "1.5px",
                borderRadius: 2,
                background: open ? "var(--accent)" : "var(--text-secondary)",
                width: i === 1 && open ? 14 : 20,
                transform: open
                  ? i === 0
                    ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2
                      ? "rotate(-45deg) translate(4.5px, -4.5px)"
                      : "scaleX(0)"
                  : "none",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.25s ease",
        }}
      >
        {/* Close icon in header area */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "var(--nav-height)",
            padding: "0 clamp(20px, 4vw, 48px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              DM
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-strong)",
              borderRadius: 8,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              cursor: "pointer",
              fontSize: 16,
              transition: "all 0.2s",
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {NAV_LINKS.map(({ id, label }, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(26px, 7vw, 40px)",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              color: active === id ? "var(--accent)" : "var(--text-primary)",
              padding: "12px 32px",
              letterSpacing: "-0.03em",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(16px)",
              transition: `opacity 0.3s ${i * 60}ms, transform 0.3s ${i * 60}ms`,
            }}
          >
            {label}
          </button>
        ))}

        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 12,
            opacity: open ? 1 : 0,
            transition: "opacity 0.3s 0.3s",
          }}
        >
          {[
            { label: "GitHub", href: "https://github.com/devendramali12" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/devendra-mali-851538228/",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 24px",
                borderRadius: 10,
                border: "1px solid var(--border-strong)",
                background: "var(--bg-surface)",
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .nav-links-desktop { display: flex; }
        .nav-hamburger     { display: none; }
        .nav-brand         { display: inline; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
        @media (max-width: 360px) {
          .nav-brand { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
