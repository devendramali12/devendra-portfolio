// src/styles/GlobalStyles.jsx
import React from "react";

const GlobalStyles = () => {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* ===================================================
         DESIGN TOKENS — Deep Navy + Electric Indigo
         Direction: Stripe / Linear / Vercel aesthetic
         Accent: ONE color only — #6366F1 (indigo)
      =================================================== */
      :root {
        /* Backgrounds — layered, distinguishable */
        --bg-base:       #0D1117;   /* page background */
        --bg-surface:    #161B22;   /* cards, panels */
        --bg-elevated:   #1C2333;   /* hover states, inputs */
        --bg-overlay:    #21262D;   /* tooltips, menus */

        /* Single accent — electric indigo */
        --accent:        #6366F1;
        --accent-hover:  #818CF8;
        --accent-muted:  rgba(99, 102, 241, 0.12);
        --accent-border: rgba(99, 102, 241, 0.25);
        --accent-glow:   rgba(99, 102, 241, 0.20);

        /* Text hierarchy */
        --text-primary:   #F0F6FC;
        --text-secondary: #8B949E;
        --text-muted:     #484F58;
        --text-accent:    #6366F1;

        /* Borders */
        --border:         #21262D;
        --border-muted:   rgba(255,255,255,0.06);
        --border-strong:  rgba(255,255,255,0.12);

        /* Shadows */
        --shadow-sm:  0 1px 3px rgba(0,0,0,0.4);
        --shadow-md:  0 4px 16px rgba(0,0,0,0.5);
        --shadow-lg:  0 8px 32px rgba(0,0,0,0.6);
        --shadow-xl:  0 20px 60px rgba(0,0,0,0.7);
        --glow:       0 0 24px rgba(99,102,241,0.15);

        /* Layout */
        --nav-height: 68px;
        --radius:     12px;
        --radius-lg:  18px;
      }

      /* ===== KEYFRAMES ===== */
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.92); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes floatA {
        0%,100% { transform: translateY(0) rotate(-4deg); }
        50%      { transform: translateY(-12px) rotate(-2deg); }
      }
      @keyframes floatB {
        0%,100% { transform: translateY(0) rotate(3deg); }
        50%      { transform: translateY(-10px) rotate(5deg); }
      }
      @keyframes floatPill {
        0%,100% { transform: translateY(0); }
        50%      { transform: translateY(-7px); }
      }
      @keyframes bounceY {
        0%,100% { transform: translateY(0); }
        50%      { transform: translateY(7px); }
      }
      @keyframes gradientText {
        0%,100% { background-position: 0% 50%; }
        50%      { background-position: 100% 50%; }
      }
      @keyframes pulseRing {
        0%   { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(2.2); opacity: 0; }
      }
      @keyframes dotPulse {
        0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
        50%      { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
      }
      @keyframes shake {
        0%,100% { transform: translateX(0); }
        20%      { transform: translateX(-5px); }
        40%      { transform: translateX(5px); }
        60%      { transform: translateX(-3px); }
        80%      { transform: translateX(3px); }
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes typewriterBar {
        0%,100% { opacity: 1; }
        50%      { opacity: 0; }
      }

      /* ===== GLOBAL UTILITIES ===== */

      .gradient-text {
        background: linear-gradient(135deg, #818CF8 0%, #6366F1 50%, #A78BFA 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientText 4s ease infinite;
      }

      .section-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--accent);
        margin-bottom: 16px;
      }
      .section-label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 1.5px;
        background: var(--accent);
        border-radius: 1px;
      }

      .section-title {
        font-family: 'Space Grotesk', system-ui, sans-serif;
        font-size: clamp(26px, 4.5vw, 46px);
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1.1;
        letter-spacing: -0.025em;
      }

      /* ===== BUTTONS ===== */
      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent);
        color: #fff;
        padding: 12px 24px;
        border-radius: var(--radius);
        font-weight: 600;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        white-space: nowrap;
        letter-spacing: -0.01em;
      }
      .btn-primary:hover {
        background: var(--accent-hover);
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(99,102,241,0.35);
      }
      .btn-primary:active { transform: translateY(0); }

      .btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: transparent;
        color: var(--text-secondary);
        padding: 11px 24px;
        border-radius: var(--radius);
        font-weight: 500;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        border: 1px solid var(--border-strong);
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        white-space: nowrap;
        letter-spacing: -0.01em;
      }
      .btn-secondary:hover {
        border-color: var(--accent-border);
        color: var(--text-primary);
        background: var(--accent-muted);
      }

      /* ===== CARDS ===== */
      .card {
        background: var(--bg-surface);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
      }
      .card:hover {
        border-color: var(--accent-border);
        box-shadow: var(--glow);
      }

      .card-hover-lift:hover {
        transform: translateY(-4px);
      }

      /* ===== SECTION DIVIDER ===== */
      .section-divider {
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
      }

      /* ===== BODY LOCK ===== */
      body.menu-open { overflow: hidden; }

      /* ===== RESPONSIVE GRIDS ===== */
      @media (max-width: 768px) {
        .hero-grid     { grid-template-columns: 1fr !important; }
        .hero-right    { display: none !important; }
        .about-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
        .contact-grid  { grid-template-columns: 1fr !important; gap: 36px !important; }
      }
      @media (max-width: 640px) {
        .edu-row { justify-content: flex-start !important; padding-left: 28px !important; padding-right: 0 !important; }
        .edu-row > div:last-child { margin: 0 !important; width: 100% !important; }
        .edu-line { left: 14px !important; transform: none !important; }
        .edu-dot  { left: 14px !important; transform: translateY(-50%) !important; }
        .footer-top { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

export default GlobalStyles;
