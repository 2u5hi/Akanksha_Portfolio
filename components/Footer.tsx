"use client";

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ backgroundColor: "var(--cream)", borderColor: "#e8c4b8" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          style={{ fontFamily: "var(--font-playfair)" }}
          className="text-[#2c3e50] font-semibold"
        >
          Akanksha Wadhwan
        </p>
        <p
          style={{ fontFamily: "var(--font-dm-sans)" }}
          className="text-xs text-[#7a7a7a]"
        >
          © {new Date().getFullYear()} · Marketing Portfolio
        </p>
        <div className="flex gap-5">
          <a
            href="mailto:akankshawadhwan@gmail.com"
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-xs text-[#7a7a7a] hover:text-[#c97b6b] transition-colors uppercase tracking-widest"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/akanksha-wadhwan-b81383292/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-xs text-[#7a7a7a] hover:text-[#c97b6b] transition-colors uppercase tracking-widest"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
