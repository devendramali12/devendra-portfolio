// src/components/Projects.jsx
import React from "react";
import useInView from "../hooks/useInView";

const PROJECTS = [
  {
    title: "Shop Ease",
    tagline: "E-Commerce Platform",
    desc: "A complete e-commerce solution with role-based auth for Admin & Customer, shopping cart, coupon/discount system, invoice generation, and real-time low-stock alerts with payment gateway integration.",
    tech: ["Java", "Servlets", "JSP", "PostgreSQL", "Maven", "Tomcat"],
    github:
      "https://github.com/devendramali12/Java-Eclipse/tree/master/ShoppingCart",
    live: null,
    image: "🛒",
  },
  {
    title: "Travel & Tourism System",
    tagline: "Booking Management Platform",
    desc: "An MVC-based travel booking system with Admin Dashboard, full CRUD on travel packages & bookings, role-based session authentication, and SQL injection prevention via parameterized JDBC queries.",
    tech: ["Java 17", "Jakarta Servlets", "JSP", "PostgreSQL", "JDBC", "Maven"],
    github:
      "https://github.com/devendramali12/Java-Eclipse/tree/master/TravelTourismSystem",
    live: null,
    image: "✈️",
  },
  {
    title: "Weather Forecast App",
    tagline: "Real-time Weather Application",
    desc: "A responsive React application with real-time weather API integration, 5-day forecast visualizations, dark/light mode toggle, geolocation support, search history, and optimized API calls for performance.",
    tech: ["React", "Vite", "CSS3", "OpenWeather API"],
    github: "https://github.com/devendramali12/Weather-App",
    live: "https://forecastpro-12.netlify.app",
    image: "🌤️",
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
        overflow: "hidden",
      }}
    >
      {/* Image/Icon */}
      <div
        style={{
          width: "100%",
          height: 120,
          background: `linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-overlay) 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          borderBottom: "1px solid var(--border)",
        }}
      >
        {p.image}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <h3
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 4,
            letterSpacing: "-0.02em",
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.02em",
            marginBottom: 16,
          }}
        >
          {p.tagline}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {p.desc}
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 16,
          }}
        >
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                fontWeight: 500,
                padding: "4px 8px",
                borderRadius: 4,
                background: "var(--bg-overlay)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              flex: 1,
              justifyContent: "center",
              padding: "8px 12px",
              fontSize: 13,
            }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
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
                padding: "8px 12px",
                fontSize: 13,
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
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: 16,
              fontSize: "clamp(15px, 1.8vw, 18px)",
            }}
          >
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
            <ProjectCard key={p.title} p={p} i={i} inView={inView} />
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
