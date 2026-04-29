// src/components/Skills.jsx
import React from "react";
import useInView from "../hooks/useInView";

const SKILL_CATEGORIES = [
  {
    title: "Backend Development",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: ["Java", "Spring Boot", "RESTful APIs", "Hibernate & JPA"],
  },
  {
    title: "Frontend Development",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Database & Data",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL & Query Optimization",
      "Database Design",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    skills: ["Git & GitHub", "Maven", "Docker", "Linux/CLI"],
  },
];

const CORE_COMPETENCIES = [
  "Object-Oriented Programming",
  "Design Patterns",
  "Clean Code",
  "Problem Solving",
];

const TECH_STACK = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "PostgreSQL",
  "Docker",
  "Git",
  "Maven",
];

const LEARNING_FOCUS = [
  {
    area: "Advanced Java & Spring",
    topics: ["Spring Security", "Spring Cloud", "Design Patterns"],
  },
  {
    area: "Cloud & DevOps",
    topics: ["AWS Basics", "CI/CD Pipelines", "Kubernetes"],
  },
  {
    area: "System Design",
    topics: ["Scalability", "Distributed Systems", "Architecture"],
  },
];

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
            marginBottom: "clamp(50px, 8vw, 80px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span className="section-label">Technical Proficiency</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: 14,
              fontSize: "clamp(15px, 1.8vw, 17px)",
              maxWidth: 600,
              margin: "14px auto 0",
              lineHeight: 1.65,
            }}
          >
            Building full-stack applications with Java and modern web
            technologies. Continuously learning and expanding my knowledge
            through hands-on projects.
          </p>
        </div>

        {/* Skill categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 64,
          }}
        >
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={category.title}
              className="card"
              style={{
                padding: 32,
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(32px)",
                transition: `all 0.7s ${catIdx * 0.15}s cubic-bezier(0.4,0,0.2,1)`,
                background: "var(--bg-base)",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
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
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--text-primary)",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {category.skills.map((skill, idx) => (
                  <div
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateX(-10px)",
                      transition: `all 0.5s ${
                        catIdx * 0.15 + idx * 0.08 + 0.3
                      }s cubic-bezier(0.4,0,0.2,1)`,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div
          style={{
            marginBottom: 64,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.7s 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: 8,
              }}
            >
              Core Competencies
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              Fundamental programming and engineering skills
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {CORE_COMPETENCIES.map((competency, i) => (
              <div
                key={competency}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s",
                  opacity: inView ? 1 : 0,
                  animation: inView
                    ? `scaleIn 0.4s ${i * 0.05 + 0.5}s both`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.background = "var(--accent-muted)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "var(--bg-base)";
                }}
              >
                {competency}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.7s 0.6s cubic-bezier(0.4,0,0.2,1)",
            marginBottom: 64,
            paddingBottom: 64,
            borderBottom: "1px solid var(--border)",
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
              marginBottom: 24,
            }}
          >
            Technology Stack
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {TECH_STACK.map((tech, i) => (
              <span
                key={tech}
                style={{
                  padding: "9px 20px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-secondary)",
                  cursor: "default",
                  transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                  opacity: inView ? 1 : 0,
                  animation: inView
                    ? `scaleIn 0.4s ${i * 0.04 + 0.6}s both`
                    : "none",
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
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Current Learning Focus */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.7s 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 100,
                background: "var(--accent-muted)",
                border: "1px solid var(--accent-border)",
                marginBottom: 16,
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="var(--accent)"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Currently Learning
              </span>
            </div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: 10,
              }}
            >
              Expanding My Knowledge
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Actively exploring advanced topics and emerging technologies
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {LEARNING_FOCUS.map((focus, idx) => (
              <div
                key={idx}
                style={{
                  padding: 28,
                  borderRadius: "12px",
                  background: "var(--bg-base)",
                  border: "1px solid var(--border)",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.background = "var(--accent-muted)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-base)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 16,
                  }}
                >
                  {focus.area}
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {focus.topics.map((topic, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--accent)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
