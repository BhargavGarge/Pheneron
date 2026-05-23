"use client";

import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products", hasChevron: true },
  { label: "Customer Stories", href: "#customer-stories" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

function SunburstIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      aria-hidden="true"
      style={{ color: "white", flexShrink: 0 }}
    >
      <path
        d="M12 2.5v3.2M12 18.3v3.2M4.4 4.4l2.3 2.3M17.3 17.3l2.3 2.3M2.5 12h3.2M18.3 12h3.2M4.4 19.6l2.3-2.3M17.3 6.7l2.3-2.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "transparent",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <a href="#" aria-label="Home" style={{ display: "inline-flex" }}>
          <SunburstIcon />
        </a>

        <div
          style={{
            alignItems: "center",
            gap: "2rem",
            fontFamily: '"Instrument Sans", sans-serif',
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                lineHeight: 1,
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = "white";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = "rgba(255,255,255,0.8)";
              }}
            >
              <span>{link.label}</span>
              {link.hasChevron && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="#demo"
            style={{
              color: "rgba(255,255,255,0.8)",
              fontFamily: '"Instrument Sans", sans-serif',
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              lineHeight: 1,
            }}
            className="hidden sm:block"
            onMouseEnter={(event) => {
              event.currentTarget.style.color = "white";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            Book A Demo
          </a>

          <a
            href="#get-started"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              background: "white",
              color: "#000000",
              textDecoration: "none",
              fontFamily: '"Instrument Sans", sans-serif',
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
