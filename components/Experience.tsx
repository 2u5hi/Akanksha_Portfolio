"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface Role {
  number: string;
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tools: string[];
  accent: string;
}

const roles: Role[] = [
  {
    number: "01",
    title: "Social Media & Video Intern",
    company: "RetroSynth Records",
    period: "July 2026 – Present",
    location: "Remote · Austin, TX",
    highlights: [
      "Create promotional video content in Canva for artist releases and campaigns, developing visuals aligned with each artist's branding, music style, and promotional direction",
      "Publish and coordinate promotional content across multiple social media platforms, adapting creative assets, captions, and formats for platform-specific audiences",
      "Support digital marketing for artists and new music releases through social media content creation, promotional assets, and release-focused campaigns",
    ],
    tools: ["Canva", "Video Content", "Social Media"],
    accent: "#c97b6b",
  },
  {
    number: "02",
    title: "Front Desk Receptionist",
    company: "Phenix Salon Suites",
    period: "May 2023 – Apr. 2026",
    location: "Cumming, GA",
    highlights: [
      "Assisted the manager and owner with administrative tasks, demonstrating strong time-management, organizational, and multitasking abilities in a fast-paced environment",
      "Supported marketing initiatives by promoting services to prospective clients, applying communication and interpersonal skills to drive client acquisition",
      "Delivered exceptional customer service by managing client relations, addressing inquiries and concerns, and maintaining a welcoming and professional environment",
      "Coordinated scheduling, appointment management, and front desk operations to ensure a smooth daily workflow",
    ],
    tools: ["Client Relations", "Operations", "Customer Service"],
    accent: "#9b7b8a",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b] mb-3"
          >
            Where I&apos;ve Worked
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-semibold text-[#2c3e50] mb-16"
          >
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {roles.map((role, i) => (
            <FadeIn key={role.company} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden border group"
                style={{ backgroundColor: "#faf8f5", borderColor: "#e8c4b8" }}
              >
                <div className="p-8 md:p-10 grid md:grid-cols-[1fr_2fr] gap-8">
                  {/* Left meta */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="text-6xl font-semibold opacity-10 text-[#2c3e50] leading-none"
                      >
                        {role.number}
                      </span>
                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="text-xs text-[#7a7a7a] uppercase tracking-wider mt-3"
                      >
                        {role.period}
                      </p>
                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="text-xs text-[#7a7a7a] uppercase tracking-wider mt-1 font-light"
                      >
                        {role.location}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                      {role.tools.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            backgroundColor: role.accent + "18",
                            color: role.accent,
                          }}
                          className="text-xs px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right content */}
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-playfair)" }}
                      className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-1 group-hover:text-[#c97b6b] transition-colors duration-300"
                    >
                      {role.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: role.accent,
                      }}
                      className="text-sm font-medium mb-6"
                    >
                      {role.company}
                    </p>

                    <div className="flex flex-col gap-4">
                      {role.highlights.map((h) => (
                        <div key={h} className="flex gap-3">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0 mt-2.5"
                            style={{ backgroundColor: role.accent + "80" }}
                          />
                          <p
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                            className="text-[#7a7a7a] leading-relaxed font-light text-sm"
                          >
                            {h}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: role.accent }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
