// src/components/CodeDemo.jsx
import React from "react";

const CodeDemo = ({ language = "javascript", code, title, description }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid var(--border)",
        background: "var(--bg-base)",
        overflow: "hidden",
        marginBottom: "24px",
      }}
    >
      {/* Header */}
      {(title || description) && (
        <div
          style={{
            padding: "16px 20px",
            background: "var(--bg-elevated)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {title && (
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: description ? 4 : 0,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {title}
            </h4>
          )}
          {description && (
            <p
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Code container */}
      <div
        style={{
          position: "relative",
          background: "var(--bg-base)",
          padding: "16px 0",
        }}
      >
        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 10,
            padding: "6px 12px",
            fontSize: 12,
            fontWeight: 600,
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            color: copied ? "var(--accent)" : "var(--text-muted)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.borderColor = "var(--accent-border)";
              e.currentTarget.style.color = "var(--accent)";
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }
          }}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>

        {/* Code block */}
        <pre
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            padding: "16px 20px",
            margin: 0,
            overflow: "auto",
            maxHeight: "400px",
          }}
        >
          <code>{code}</code>
        </pre>
      </div>

      {/* Language badge */}
      <div
        style={{
          padding: "8px 20px",
          background: "var(--bg-elevated)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {language}
        </span>
      </div>
    </div>
  );
};

export default CodeDemo;
