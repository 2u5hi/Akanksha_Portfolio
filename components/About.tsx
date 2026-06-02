"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "4+", label: "Years of\nCustomer Experience" },
  { value: "3", label: "Marketing\nProjects" },
  { value: "AMA", label: "Active Member\nAmerican Marketing Association" },
  { value: "2026", label: "BBA Marketing\nGeorgia State University" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b] mb-3"
          >
            About Me
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-6">
          {/* Left: story */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                style={{ fontFamily: "var(--font-playfair)" }}
                className="text-4xl md:text-5xl font-semibold text-[#2c3e50] leading-tight mb-8"
              >
                Finding the story
                <br />
                in the{" "}
                <span className="italic text-[#c97b6b]">numbers.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[#7a7a7a] leading-relaxed mb-5 font-light text-base"
              >
                I&apos;m a fourth-year Marketing student at Georgia State University&apos;s
                J. Mack Robinson College of Business. I genuinely believe great marketing
                starts with understanding people: what they need, what they care about,
                and what actually moves them to act.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[#7a7a7a] leading-relaxed mb-5 font-light text-base"
              >
                My projects have taken me across social media strategy, consumer research,
                and business analytics. Each one pushed me to think creatively and back it
                up with real data. I like finding the story inside the numbers and figuring
                out how to tell it in a way that actually lands.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[#7a7a7a] leading-relaxed font-light text-base"
              >
                Outside of school, four years at Phenix Salon Suites taught me
                a lot about what it means to build client relationships and represent
                a brand in person. That experience made me a better marketer.
              </p>
            </FadeIn>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.1 * (i + 1)} direction="left">
                <div
                  className="rounded-2xl p-6 flex flex-col justify-between h-36 border"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#f0e8e4" : "#faf8f5",
                    borderColor: "#e8c4b8",
                  }}
                >
                  <span
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-3xl font-semibold text-[#c97b6b]"
                  >
                    {s.value}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    className="text-xs text-[#7a7a7a] leading-snug uppercase tracking-wide whitespace-pre-line"
                  >
                    {s.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
