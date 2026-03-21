// src/components/Projects.jsx
import React from "react";
import useInView from "../hooks/useInView";

const PROJECTS = [
  {
    num: "01",
    title: "Shop Ease",
    tagline: "Full-Stack E-Commerce Platform",
    desc: "A complete e-commerce platform with role-based authentication for Admin & Customer, shopping cart, coupon/discount system, invoice generation, and real-time low-stock alerts.",
    tech: ["Java", "Servlets", "JSP", "PostgreSQL", "Maven", "Tomcat"],
    github: "https://github.com/devendramali12/Java-Eclipse/tree/master/ShoppingCart",
    live: null,
  },
  {
    num: "02",
    title: "Travel & Tourism System",
    tagline: "MVC Web Application",
    desc: "An MVC-based travel booking system with an Admin Dashboard, full CRUD on travel packages & bookings, role-based session auth, and SQL injection prevention via parameterized JDBC queries.",
    tech: ["Java 17", "Jakarta Servlets", "JSP", "PostgreSQL", "JDBC", "Maven"],
    github: "https://github.com/devendramali12/Java-Eclipse/tree/master/TravelTourismSystem",
    live: null,
  },
  {
    num: "03",
    title: "Weather Forecast App",
    tagline: "Real-time React Application",
    desc: "A responsive React application with real-time weather API integration, 5-day forecast charts, dark/light mode toggle, geolocation support, search history, and optimized API calls.",
    tech: ["React", "Vite", "CSS3", "OpenWeather API"],
    github: "#",
    live: "https://forecastpro-12.netlify.app",
  },
];

const ProjectCard = ({ p, i, inView }) => {
  return (
    <div
      className="card card-hover-lift"
      style={{
        display: "flex",
        flexDirection: "column",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: `all 0.7s ${i * 0.15 + 0.2}s cubic-bezier(0.4,0,0.2,1)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "var(--accent)",
          opacity: 0.8,
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: "28px 28px 20px",
          borderBottom: "1px solid var(--border)",
          background: "linear-gradient(180deg, var(--bg-elevated) 0%, transparent 100%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <h3
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {p.title}
          </h3>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--text-muted)",
            }}
          >
            {p.num}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.02em" }}>
          {p.tagline}
        </p>
      </div>

      {/* Body */}
      <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: 24,
            flex: 1,
          }}
        >
          {p.desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: "4px 10px",
                borderRadius: 6,
                background: "var(--bg-overlay)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              flex: 1,
              justifyContent: "center",
              padding: "10px 16px",
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                flex: 1,
                justifyContent: "center",
                padding: "10px 16px",
              }}
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: "var(--bg-base)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 16, fontSize: "clamp(15px, 1.8vw, 18px)" }}>
            A selection of my recent technical work
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} p={p} i={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: 56,
            opacity: inView ? 1 : 0,
            transition: "all 0.7s 0.6s",
          }}
        >
          <a
            href="https://github.com/devendramali12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: "14px 28px" }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
