"use client";

import FadeIn from "./FadeIn";

const skillGroups = [
  {
    category: "Marketing",
    color: "#c97b6b",
    skills: [
      "Social Media Marketing",
      "Campaign Strategy",
      "Brand & Content Strategy",
      "Consumer Research",
      "Marketing Analytics",
      "Advertising",
      "Market Analysis",
      "Customer Engagement",
    ],
  },
  {
    category: "Technical Tools",
    color: "#9b7b8a",
    skills: [
      "Microsoft Excel",
      "Pivot Tables & Forecasting",
      "Regression Analysis",
      "Canva",
      "SEMrush",
      "PowerPoint",
      "Google Workspace",
    ],
  },
  {
    category: "Soft Skills",
    color: "#3d5166",
    skills: [
      "Customer Service",
      "Team Collaboration",
      "Written Communication",
      "Verbal Communication",
      "Organization",
      "Critical Thinking",
      "Entrepreneurial Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b] mb-3"
          >
            Capabilities
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-semibold text-[#2c3e50] mb-16"
          >
            Skills & Tools
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={0.1 * (i + 1)}>
              <div
                className="rounded-2xl p-8 border h-full"
                style={{ borderColor: "#e8c4b8", backgroundColor: "#faf8f5" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: group.color,
                    }}
                    className="text-xs font-medium tracking-[0.2em] uppercase"
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {group.skills.map((skill, j) => (
                    <FadeIn key={skill} delay={0.05 * j + 0.1 * (i + 1)}>
                      <div className="flex items-center gap-3 group">
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:scale-150"
                          style={{ backgroundColor: group.color + "80" }}
                        />
                        <span
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                          className="text-sm text-[#7a7a7a] group-hover:text-[#2c3e50] transition-colors duration-200 font-light"
                        >
                          {skill}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
