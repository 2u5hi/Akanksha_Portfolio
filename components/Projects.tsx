"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ProjectViewer from "./ProjectViewer";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  tools: string[];
  files: { label: string; url: string; type: "pdf" | "xlsx" }[];
  accent: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Chick-fil-A Social Media Campaign",
    subtitle: "Brand Strategy · Content · SEMrush",
    description:
      "For a university marketing course, I built a mock social media campaign for Chick-fil-A from the ground up. I researched hashtags and keywords through SEMrush, dug into seasonal trends, and put together a content plan tailored to each platform. The goal was to make it feel like something the brand could actually run.",
    tags: ["Social Media", "Brand Strategy", "Content Creation", "Mock Campaign"],
    tools: ["SEMrush", "Canva", "Social Media Analytics"],
    files: [
      {
        label: "Campaign Plan",
        url: "/projects/chickfila-campaign.pdf",
        type: "pdf",
      },
      {
        label: "Good Eats LLC Brief",
        url: "/projects/chickfila-goodeats.pdf",
        type: "pdf",
      },
    ],
    accent: "#c97b6b",
  },
  {
    number: "02",
    title: "Business Analytics & Forecasting",
    subtitle: "Data Analysis · Excel · Regression",
    description:
      "For this project I used Excel analytics tools to forecast demand, evaluate expansion strategies and support data driven decision making for a donut business.",
    tags: ["Forecasting", "Data Analysis", "Decision Modeling"],
    tools: ["Excel", "Pivot Tables", "Regression Analysis"],
    files: [
      {
        label: "Analysis Workbook",
        url: "/projects/business-analysis.xlsx",
        type: "xlsx",
      },
    ],
    accent: "#9b7b8a",
  },
  {
    number: "03",
    title: "Greenlight Consumer Research",
    subtitle: "Survey Research · Consumer Behavior · Strategy",
    description:
      "Greenlight is a mental health app concept for college students. My team ran surveys, analyzed the responses, and tried to get at what would actually make someone want to use something like this. We looked at user needs, hesitations, and what the market looked like, then turned all of it into a formal strategy presentation.",
    tags: ["Consumer Research", "Market Analysis", "Mental Health", "Survey Design"],
    tools: ["Survey Research", "Qualitative Analysis", "PowerPoint"],
    files: [
      {
        label: "Survey Responses",
        url: "/projects/greenlight-survey.pdf",
        type: "pdf",
      },
      {
        label: "Data Analysis",
        url: "/projects/greenlight-analysis.pdf",
        type: "pdf",
      },
    ],
    accent: "#3d5166",
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-28"
      style={{ backgroundColor: "#f0e8e4" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b] mb-3"
          >
            Selected Work
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl md:text-5xl font-semibold text-[#2c3e50] mb-16"
          >
            Projects
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.number} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-[#faf8f5] rounded-2xl overflow-hidden border cursor-pointer group"
                style={{ borderColor: "#e8c4b8" }}
                onClick={() => setOpenProject(project)}
              >
                <div className="p-8 md:p-10 grid md:grid-cols-[1fr_2fr] gap-8">
                  {/* Left meta */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="text-6xl font-semibold opacity-10 text-[#2c3e50] leading-none"
                      >
                        {project.number}
                      </span>
                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="text-xs text-[#7a7a7a] uppercase tracking-wider mt-3"
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            backgroundColor: project.accent + "18",
                            color: project.accent,
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
                      className="text-2xl md:text-3xl font-semibold text-[#2c3e50] mb-4 group-hover:text-[#c97b6b] transition-colors duration-300"
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      className="text-[#7a7a7a] leading-relaxed font-light mb-6"
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                          className="text-xs px-3 py-1 rounded-full bg-[#e8c4b8]/40 text-[#7a7a7a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: project.accent,
                      }}
                      className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200"
                    >
                      View Project Materials
                      <span className="text-base">→</span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: project.accent }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {openProject && (
        <ProjectViewer
          isOpen={!!openProject}
          onClose={() => setOpenProject(null)}
          title={openProject.title}
          files={openProject.files}
        />
      )}
    </section>
  );
}
