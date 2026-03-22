// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import useTypingEffect from "../hooks/useTypingEffect";

const ROLES = [
  "Java Backend Developer",
  "React Frontend Developer",
  "Full Stack Engineer",
];

const Hero = () => {
  const { text: typingText, isTyping } = useTypingEffect(ROLES, 100, 50, 2000);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const scrollOffset = -rect.top * 0.5;
        setParallaxOffset(scrollOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "calc(var(--nav-height) + 40px) clamp(20px, 4vw, 48px) 60px",
        position: "relative",
        background: "var(--bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "40%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          maskImage:
            "linear-gradient(to bottom, transparent, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT COLUMN: Content */}
        <div
          style={{
            animation: "fadeUp 1s 0.2s both cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              marginBottom: 32,
              animation: "fadeIn 1s 0.4s both",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 0 0 rgba(16,185,129,0.5)",
                animation: "dotPulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-secondary)",
                letterSpacing: "0.02em",
              }}
            >
              Available for new opportunities
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(48px, 7.5vw, 88px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "var(--text-primary)",
              letterSpacing: "-0.04em",
              marginBottom: 24,
            }}
          >
            Devendra
            <br />
            <span className="gradient-text">Mali</span>
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "var(--text-secondary)",
              marginBottom: 28,
              height: 32,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--accent)", marginRight: 10 }}>
              &gt;
            </span>
            {typingText}
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: "1.1em",
                background: "var(--accent)",
                marginLeft: 4,
                animation: isTyping ? "none" : "typewriterBar 1s infinite",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 540,
              marginBottom: 40,
            }}
          >
            Full Stack Developer passionate about crafting clean, efficient code
            and scalable architectures. I specialize in building
            production-ready applications with Java Spring Boot backends, React
            frontends, and robust database solutions. Focused on creating
            solutions that impact and continuously improving through best
            practices.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <a
              href="#projects"
              className="btn-primary"
              style={{ padding: "14px 28px", fontSize: 15 }}
            >
              View Projects
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="/Devendra_mali (1).pdf"
              download
              className="btn-secondary"
              style={{ padding: "14px 28px", fontSize: 15 }}
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Download Resume
            </a>
            <a
              href="https://github.com/devendramali12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: "14px 20px" }}
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Quick Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
              marginTop: 48,
              opacity: 0.9,
            }}
          >
            <div
              style={{
                padding: "16px",
                borderRadius: 12,
                background: "var(--bg-overlay)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--accent)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                3+
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                Projects Completed
              </div>
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: 12,
                background: "var(--bg-overlay)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--accent)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                Tech Skills
              </div>
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: 12,
                background: "var(--bg-overlay)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--accent)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                2 Yrs
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                Learning Journey
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visuals (Hidden on mobile) */}
        <div
          className="hero-right"
          style={{
            position: "relative",
            height: 500,
            perspective: 1000,
            animation: "fadeIn 1s 0.6s both",
          }}
        >
          {/* Main IDE window */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: "90%",
              aspectRatio: "4/3",
              background: "#010409" /* Darker contrast base */,
              borderRadius: "16px",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
              transform: `rotateY(-12deg) rotateX(4deg) translateY(${parallaxOffset}px)`,
              transformStyle: "preserve-3d",
              animation: "floatA 6s ease-in-out infinite",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.05s ease-out",
            }}
          >
            {/* Window header */}
            <div
              style={{
                height: 32,
                background: "#0D1117",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FF5F56",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FFBD2E",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#27C93F",
                }}
              />
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--text-muted)",
                  marginLeft: 10,
                }}
              >
                App.java — devendra-portfolio
              </div>
            </div>

            {/* Code Content */}
            <div
              style={{
                padding: 24,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                flex: 1,
              }}
            >
              <div style={{ color: "#8B949E", marginBottom: 12 }}>
                // Main entry point
              </div>
              <div>
                <span style={{ color: "#FF7B72" }}>public class</span>{" "}
                <span style={{ color: "#D2A8FF" }}>Developer</span> {"{"}
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#FF7B72" }}>private</span> String name ={" "}
                <span style={{ color: "#A5D6FF" }}>"Devendra Mali"</span>;
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#FF7B72" }}>private</span> String[]
                skills = {"{"}
              </div>
              <div style={{ paddingLeft: 40, color: "#A5D6FF" }}>
                "Java", "React", "PostgreSQL"
              </div>
              <div style={{ paddingLeft: 20 }}>{"}"};</div>
              <br />
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#FF7B72" }}>public void</span>{" "}
                <span style={{ color: "#D2A8FF" }}>buildApp</span>() {"{"}
              </div>
              <div style={{ paddingLeft: 40 }}>
                System.<span style={{ color: "#79C0FF" }}>out</span>.println(
                <span style={{ color: "#A5D6FF" }}>"Deploying..."</span>);
              </div>
              <div style={{ paddingLeft: 20 }}>{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>

          {/* Profile Card overlay overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "-5%",
              background: "var(--bg-surface)",
              padding: 24,
              borderRadius: "16px",
              border: "1px solid var(--border-strong)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
              animation: "floatB 7s ease-in-out infinite reverse",
              display: "flex",
              alignItems: "center",
              gap: 16,
              transform: `translateZ(40px) translateY(${parallaxOffset * 0.8}px)`,
              transition: "transform 0.05s ease-out",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 14,
                background: "linear-gradient(135deg, var(--accent), #8B5CF6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              DM
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Devendra Mali
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  marginTop: 2,
                }}
              >
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
