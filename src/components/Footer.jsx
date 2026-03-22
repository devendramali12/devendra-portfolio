// src/components/Footer.jsx
import React from "react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/devendramali12",
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devendra-mali-851538228/",
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:devendraa.mali12@gmail.com",
    svg: (
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Footer = () => {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        style={{
          background: "var(--bg-base)",
          borderTop: "1px solid var(--border)",
          padding:
            "clamp(48px, 6vw, 64px) clamp(20px, 4vw, 48px) clamp(28px, 4vw, 36px)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Main Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(36px, 5vw, 48px)",
              marginBottom: "clamp(40px, 5vw, 48px)",
            }}
          >
            {/* Brand & Info */}
            <div style={{ maxWidth: 400 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  DM
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Devendra Mali
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    Full Stack Developer
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Building robust web applications with Java and modern frontend
                technologies. MCA student at Mumbai University, open to
                opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: "0 0 18px 0",
                }}
              >
                Quick Links
              </h4>
              <nav
                aria-label="Footer navigation"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
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
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textAlign: "left",
                      padding: 0,
                      transition: "color 0.2s",
                      width: "fit-content",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: "0 0 18px 0",
                }}
              >
                Connect
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 20,
                  flexWrap: "wrap",
                }}
              >
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      border: "1px solid var(--border)",
                      background: "var(--bg-surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      transition: "all 0.2s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.background = "var(--accent-muted)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "var(--bg-surface)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <a
                href="/Devendra_mali (1).pdf"
                download="Devendra_Mali_Resume.pdf"
                aria-label="Download resume as PDF"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 8,
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                  background: "var(--accent-muted)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(99,102,241,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--accent-muted)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Bottom Bar - Centered Copyright */}
          <div
            style={{
              paddingTop: "clamp(24px, 3vw, 32px)",
              borderTop: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 13,
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Devendra Mali. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            position: "fixed",
            bottom: "clamp(20px, 3vw, 32px)",
            right: "clamp(20px, 3vw, 32px)",
            zIndex: 500,
            width: 48,
            height: 48,
            borderRadius: 14,
            background: "var(--accent)",
            border: "none",
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(99,102,241,0.35)",
            transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 12px 24px rgba(99,102,241,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(99,102,241,0.35)";
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
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
