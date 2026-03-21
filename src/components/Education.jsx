// src/components/Education.jsx
import React from "react";
import useInView from "../hooks/useInView";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "L.B.H.S.S.T's Institute of Computer Application",
    location: "Mumbai, India",
    cgpi: "7.51 / 10",
    period: "2024 – 2026",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
      </svg>
    )
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "V.P.M's Bandodkar College of Science",
    location: "Thane, India",
    cgpi: "8.38 / 10",
    period: "2021 – 2024",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l2.387-2.387a2 2 0 00.547-1.022M12 5v14m0-14V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
];

const Education = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      id="education"
      ref={ref}
      style={{
        background: "var(--bg-surface)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
        borderBottom: "1px solid var(--border)",
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
          <span className="section-label">Academics</span>
          <h2 className="section-title">
            My Academic{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center vertical line */}
          <div
            className="edu-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(180deg, var(--accent), var(--border), transparent)",
              opacity: inView ? 1 : 0,
              transition: "opacity 1s 0.3s",
            }}
          />

          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="edu-row"
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                marginBottom: 48,
                paddingLeft: i % 2 === 0 ? 0 : "50%",
                paddingRight: i % 2 === 0 ? "50%" : 0,
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <div
                className="edu-dot"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "var(--bg-base)",
                  border: "2px solid var(--accent)",
                  boxShadow: "0 0 0 4px var(--bg-surface), 0 0 12px var(--accent-glow)",
                  zIndex: 2,
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.5s ${i * 0.25 + 0.5}s`,
                }}
              >
                {inView && (
                  <div
                    style={{
                      position: "absolute",
                      inset: -4,
                      borderRadius: "50%",
                      border: "1px solid var(--accent)",
                      animation: "pulseRing 2s ease-out infinite",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="card card-hover-lift"
                style={{
                  width: "calc(100% - 44px)",
                  margin: i % 2 === 0 ? "0 44px 0 0" : "0 0 0 44px",
                  padding: "32px",
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "none"
                    : i % 2 === 0
                      ? "translateX(-32px)"
                      : "translateX(32px)",
                  transition: `all 0.8s ${i * 0.25 + 0.3}s cubic-bezier(0.4,0,0.2,1)`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <div style={{ color: "var(--accent)", display: "flex", alignItems: "center" }}>
                        {edu.icon}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', system-ui, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(16px, 2.2vw, 20px)",
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {edu.degree}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: 15,
                        color: "var(--text-secondary)",
                        marginBottom: 16,
                        paddingLeft: 36,
                      }}
                    >
                      {edu.institution}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        paddingLeft: 36,
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                        📍 {edu.location}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                        📅 {edu.period}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-strong)",
                      color: "var(--text-primary)",
                      fontSize: 13,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    CGPI: <span style={{ color: "var(--accent)" }}>{edu.cgpi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
