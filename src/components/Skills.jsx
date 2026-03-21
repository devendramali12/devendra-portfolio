// src/components/Skills.jsx
import React from "react";
import useInView from "../hooks/useInView";

const SKILL_CATEGORIES = [
  {
    title: "Backend",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Java", level: 88 },
      { name: "Spring Boot", level: 80 },
      { name: "Spring Framework", level: 75 },
      { name: "Java Servlets & JSP", level: 82 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Frontend",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React", level: 82 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5 & CSS3", level: 88 },
      { name: "Responsive Design", level: 85 },
      { name: "Vite", level: 72 },
    ],
  },
  {
    title: "Database & Tools",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "JDBC", level: 78 },
      { name: "MySQL", level: 72 },
      { name: "Maven", level: 75 },
      { name: "Apache Tomcat", level: 70 },
    ],
  },
];

const TECH_TAGS = [
  "Java", "Spring Boot", "Spring", "React", "PostgreSQL", 
  "JavaScript", "HTML/CSS", "Servlets", "JSP", "Hibernate", 
  "JDBC", "Maven", "Tomcat", "Vite", "REST API", "Git", "GitHub",
];

const SkillBar = ({ name, level, inView, delay }) => (
  <div style={{ marginBottom: 18 }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 8,
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-secondary)",
      }}
    >
      <span>{name}</span>
      <span style={{ color: "var(--text-primary)", fontFamily: "'JetBrains Mono', monospace" }}>
        {level}%
      </span>
    </div>
    <div
      style={{
        height: 6,
        background: "var(--bg-elevated)",
        borderRadius: 100,
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: 100,
          background: "var(--accent)",
          width: inView ? `${level}%` : "0%",
          transition: `width 1.2s ${delay}s cubic-bezier(0.4,0,0.2,1)`,
          boxShadow: "0 0 10px rgba(99,102,241,0.5)",
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background: "var(--bg-surface)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 7vw, 72px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Technical{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: 14,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              maxWidth: 520,
              margin: "14px auto 0",
            }}
          >
            My technical toolkit for building full-stack web applications
          </p>
        </div>

        {/* Skill cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="card"
              style={{
                padding: 28,
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(32px)",
                transition: `all 0.7s ${catIdx * 0.15}s cubic-bezier(0.4,0,0.2,1)`,
                position: "relative",
                overflow: "hidden",
                background: "var(--bg-base)",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 32,
                  paddingBottom: 20,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--text-primary)",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  inView={inView}
                  delay={catIdx * 0.15 + skillIdx * 0.1 + 0.3}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.7s 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Technologies I work with
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {TECH_TAGS.map((tag, i) => (
              <span
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-secondary)",
                  cursor: "default",
                  transition: "all 0.2s",
                  opacity: inView ? 1 : 0,
                  animation: inView ? `scaleIn 0.4s ${i * 0.04 + 0.5}s both` : "none",
                  fontFamily: i % 3 === 0 ? "'JetBrains Mono', monospace" : "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.background = "var(--accent-muted)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "var(--bg-overlay)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
