// src/components/Certifications.jsx
import React from "react";
import useInView from "../hooks/useInView";

const CERTS = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Jul – Oct 2025",
    score: "60%",
    desc: "12-week course covering cloud architecture, virtualization, IaaS/PaaS/SaaS models, and distributed systems fundamentals.",
    badge: "NPTEL Certified",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Java Full Stack Development",
    issuer: "J Spider Institute, Thane",
    period: "Completed 2024",
    score: null,
    desc: "Industry-oriented training covering Core Java, Servlets, Hibernate, Spring basics, React, and PostgreSQL end-to-end.",
    badge: "Industry Training",
  },
];

const Certifications = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--bg-base)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(50px, 8vw, 80px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span className="section-label">Learning</span>
          <h2 className="section-title">
            Certifications &{" "}
            <span className="gradient-text">Training</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {CERTS.map((c, i) => (
            <div
              key={c.title}
              className="card card-hover-lift"
              style={{
                display: "flex",
                flexDirection: "column",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(32px)",
                transition: `all 0.7s ${i * 0.15 + 0.2}s cubic-bezier(0.4,0,0.2,1)`,
                position: "relative",
              }}
            >
              {/* Header section */}
              <div
                style={{
                  padding: "32px 32px 24px",
                  borderBottom: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 20,
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>
                  {c.issuer}
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                    flex: 1,
                  }}
                >
                  {c.desc}
                </p>

                {/* Meta info */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: 6,
                      background: "var(--bg-elevated)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-strong)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    📅 {c.period}
                  </span>
                  {c.score && (
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "6px 14px",
                        borderRadius: 6,
                        background: "rgba(16,185,129,0.1)",
                        color: "#10B981",
                        border: "1px solid rgba(16,185,129,0.2)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      Score: {c.score}
                    </span>
                  )}
                </div>

                {/* Completed badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 0",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    borderTop: "1px solid var(--border)",
                    width: "100%",
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="var(--accent)" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {c.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
