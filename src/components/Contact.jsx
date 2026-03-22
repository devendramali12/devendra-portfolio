// src/components/Contact.jsx
import React from "react";
import useInView from "../hooks/useInView";
import Toast from "./Toast";

const CONTACT_INFO = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Location",
    value: "Mumbai, India",
    href: null,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
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
    label: "Email",
    value: "devendraa.mali12@gmail.com",
    href: "mailto:devendraa.mali12@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/devendramali12",
    href: "https://github.com/devendramali12",
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "Devendra Mali",
    href: "https://www.linkedin.com/in/devendra-mali-851538228/",
  },
];

const Contact = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.1);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle");
  const [toast, setToast] = React.useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Message is too short";
    return e;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setToast({ message: "Please fix the errors above", type: "error" });
      return;
    }
    setErrors({});
    setStatus("loading");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setToast({
          message: "Message sent successfully! I'll be in touch soon.",
          type: "success",
        });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setToast({
          message: "Failed to send. Please reach out via email.",
          type: "error",
        });
        setStatus("idle");
      });
  };

  const inputBase = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "var(--radius)",
    fontSize: 14,
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    background: "var(--bg-elevated)",
    color: "var(--text-primary)",
    transition: "all 0.2s",
    boxSizing: "border-box",
  };

  const getInputStyle = (field) => ({
    ...inputBase,
    border: `1.5px solid ${errors[field] ? "#F87171" : "var(--border-strong)"}`,
    animation: errors[field] ? "shake 0.4s ease" : "none",
  });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--bg-surface)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateX(-32px)",
            transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              marginBottom: 40,
            }}
          >
            I'm actively looking for entry-level opportunities. Whether you have
            a project, a question, or just want to say hello — my inbox is
            always open!
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONTACT_INFO.map((info) => (
              <a
                key={info.label}
                href={info.href || undefined}
                target={info.href ? "_blank" : undefined}
                rel={info.href ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  padding: "16px",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                  background: "var(--bg-base)",
                  transition: "all 0.25s",
                  cursor: info.href ? "pointer" : "default",
                }}
                onMouseEnter={(e) => {
                  if (info.href) {
                    e.currentTarget.style.borderColor = "var(--accent-border)";
                    e.currentTarget.style.background = "var(--accent-muted)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-base)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    flexShrink: 0,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div
          className="card"
          style={{
            padding: "clamp(32px, 4vw, 48px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateX(32px)",
            transition: "all 0.8s 0.2s cubic-bezier(0.4,0,0.2,1)",
            background: "var(--bg-base)",
            position: "relative",
          }}
        >
          {/* Blur overlay on submission */}
          {(status === "loading" || status === "sent") && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(13, 17, 23, 0.6)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: "var(--radius)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            />
          )}
          {status === "sent" ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 20px",
                animation: "scaleIn 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(16,185,129,0.1)",
                  color: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                }}
              >
                Message Sent!
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
              >
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot field for spam protection */}
              <input
                type="hidden"
                name="bot-field"
                value=""
                onChange={(e) => e.preventDefault()}
              />

              {/* Required for Netlify correctly routing the form in a React app */}
              <input type="hidden" name="form-name" value="contact" />

              <h3
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "var(--text-primary)",
                }}
              >
                Send a Message
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  marginBottom: 32,
                }}
              >
                Fill out the form below or send me an email directly.
              </p>

              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Your Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }));
                    if (errors.name)
                      setErrors((err) => ({ ...err, name: undefined }));
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.boxShadow = "var(--glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name
                      ? "#F87171"
                      : "var(--border-strong)";
                    e.target.style.boxShadow = "none";
                  }}
                  style={getInputStyle("name")}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p
                    style={{
                      color: "#F87171",
                      fontSize: 12,
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, email: e.target.value }));
                    if (errors.email)
                      setErrors((err) => ({ ...err, email: undefined }));
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.boxShadow = "var(--glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email
                      ? "#F87171"
                      : "var(--border-strong)";
                    e.target.style.boxShadow = "none";
                  }}
                  style={getInputStyle("email")}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p
                    style={{
                      color: "#F87171",
                      fontSize: 12,
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: 32 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <label
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      display: "block",
                    }}
                  >
                    Message
                  </label>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color:
                        form.message.length > 500
                          ? "#F87171"
                          : "var(--text-muted)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {form.message.length}/1000
                  </span>
                </div>
                <textarea
                  value={form.message}
                  onChange={(e) => {
                    if (e.target.value.length <= 1000) {
                      setForm((f) => ({ ...f, message: e.target.value }));
                      if (errors.message)
                        setErrors((err) => ({ ...err, message: undefined }));
                    }
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.boxShadow = "var(--glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.message
                      ? "#F87171"
                      : "var(--border-strong)";
                    e.target.style.boxShadow = "none";
                  }}
                  rows={5}
                  style={{
                    ...getInputStyle("message"),
                    resize: "vertical",
                    minHeight: 120,
                  }}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p
                    style={{
                      color: "#F87171",
                      fontSize: 12,
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: 15,
                  padding: "16px 28px",
                  opacity: status === "loading" ? 0.8 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ animation: "spin 0.8s linear infinite" }}
                    >
                      <circle cx="12" cy="12" r="10" opacity={0.25} />
                      <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
