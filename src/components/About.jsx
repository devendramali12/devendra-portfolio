// src/components/About.jsx
import React from "react";
import useInView from "../hooks/useInView";

const STATS = [
  { label: "Frontend", value: "React", suffix: "" },
  { label: "Backend", value: "Java", suffix: "EE" },
  { label: "Database", value: "PostgreSQL", suffix: "" },
];

const About = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "var(--bg-base)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
        position: "relative",
      }}
    >
      <div
        className="section-divider"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      <div
        className="about-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(60px, 8vw, 100px)",
          alignItems: "center",
        }}
      >
        {/* Left: Images / Stats */}
        <div
          style={{
            position: "relative",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateX(-32px)",
            transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Ring decoration */}
          <div
            style={{
              position: "absolute",
              top: -30,
              left: -30,
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "1.5px solid var(--accent)",
              opacity: 0.4,
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 12,
                left: -5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent)",
              }}
            />
          </div>

          {/* Main decorative image block */}
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              background: "linear-gradient(145deg, #F0F2F5 0%, #E5E7EB 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(6, 182, 212, 0.1)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(6, 182, 212, 0.15)"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>

          {/* Stats overlapping */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              background: "#F8F9FA",
              border: "1px solid rgba(6, 182, 212, 0.1)",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "var(--shadow-xl)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              zIndex: 2,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--text-primary)",
                  }}
                >
                  {s.value}
                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: 14,
                      marginLeft: 4,
                    }}
                  >
                    {s.suffix}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(32px)",
            transition: "all 0.8s 0.2s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Full Stack Developer focused on{" "}
            <span className="gradient-text">scalable solutions</span>
          </h2>

          <div
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <p>
              I'm a Full Stack Developer specializing in Java backend
              development and modern React frontends. With expertise in
              designing scalable architectures and delivering production-grade
              solutions, I focus on writing clean, maintainable code that solves
              real-world problems.
            </p>
            <p>
              Currently pursuing my MCA while building projects that emphasize
              performance, security, and user experience. I'm committed to
              continuous learning and adopting best practices in software
              engineering.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 40,
            }}
          >
            {[
              { label: "Location", val: "Mumbai, India" },
              { label: "Focus", val: "Java & React" },
            ].map((info) => (
              <div key={info.label}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    marginBottom: 4,
                  }}
                >
                  {info.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {info.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
