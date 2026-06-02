"use client";

import FadeIn from "./FadeIn";
import { Mail, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function LinkedInIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type ContactLink = {
  label: string;
  value: string;
  href: string;
  description: string;
  isResume?: boolean;
  isLinkedIn?: boolean;
  lucideIcon?: LucideIcon;
};

const links: ContactLink[] = [
  {
    lucideIcon: Mail,
    label: "Email",
    value: "akankshawadhwan@gmail.com",
    href: "mailto:akankshawadhwan@gmail.com",
    description: "Best for project inquiries",
  },
  {
    isLinkedIn: true,
    label: "LinkedIn",
    value: "linkedin.com/in/akankshawadhwan",
    href: "https://www.linkedin.com/in/akankshawadhwan",
    description: "Let's connect professionally",
  },
  {
    lucideIcon: FileText,
    isResume: true,
    label: "Resume",
    value: "Download PDF",
    href: "/akanksha_resume.pdf",
    description: "View full experience",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: "#f0e8e4" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b] mb-3"
          >
            Let&apos;s Talk
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl md:text-5xl font-semibold text-[#2c3e50] leading-tight mb-6"
              >
                Open to new
                <br />
                <span className="italic text-[#c97b6b]">opportunities.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[#7a7a7a] leading-relaxed font-light text-base"
              >
                I&apos;m looking for marketing internships and entry-level roles where
                I can do meaningful work and keep growing. If you have something in
                mind, want to collaborate, or just want to say hi, my inbox is open.
              </p>
            </FadeIn>
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col gap-4">
            {links.map((link, i) => {
              const LucideIcon = link.lucideIcon;
              return (
                <FadeIn key={link.label} delay={0.1 * (i + 1)} direction="left">
                  <a
                    href={link.href}
                    target={link.isResume || link.isLinkedIn ? "_blank" : undefined}
                    rel={link.isResume || link.isLinkedIn ? "noopener noreferrer" : undefined}
                    download={link.isResume ? true : undefined}
                    className="flex items-center gap-5 p-6 rounded-2xl border group hover:-translate-y-1 transition-all duration-300"
                    style={{ backgroundColor: "#faf8f5", borderColor: "#e8c4b8" }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#e8c4b8" }}
                    >
                      {link.isLinkedIn ? (
                        <LinkedInIcon size={18} color="#c97b6b" />
                      ) : LucideIcon ? (
                        <LucideIcon size={18} style={{ color: "#c97b6b" }} />
                      ) : null}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="text-xs text-[#7a7a7a] uppercase tracking-widest mb-0.5"
                      >
                        {link.label}
                      </p>
                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="text-[#2c3e50] text-sm font-medium truncate group-hover:text-[#c97b6b] transition-colors duration-200"
                      >
                        {link.value}
                      </p>
                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="text-xs text-[#7a7a7a] mt-0.5 font-light"
                      >
                        {link.description}
                      </p>
                    </div>

                    <span className="text-[#c97b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">
                      →
                    </span>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
