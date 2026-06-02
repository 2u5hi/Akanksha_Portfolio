"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Soft decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #e8c4b8, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #9b7b8a, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-sm tracking-[0.2em] uppercase text-[#c97b6b]"
          >
            Marketing Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#2c3e50]"
          >
            Akanksha
            <br />
            <span className="text-[#c97b6b]">Wadhwan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-[#7a7a7a] text-lg leading-relaxed max-w-md font-light"
          >
            Marketing student who loves brand storytelling, building social
            media campaigns, and figuring out what makes people tick.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="px-7 py-3 bg-[#c97b6b] text-white rounded-full text-sm tracking-wide hover:bg-[#b56b5b] transition-all duration-200 shadow-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="px-7 py-3 border border-[#2c3e50]/30 text-[#2c3e50] rounded-full text-sm tracking-wide hover:border-[#2c3e50] transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-3 pt-8"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-px h-10 bg-[#c97b6b]/50 mx-auto md:mx-0"
            />
            <span
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-[#7a7a7a] tracking-widest uppercase"
            >
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* Portrait side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div
              className="absolute -inset-4 rounded-full opacity-30"
              style={{
                background:
                  "conic-gradient(from 0deg, #e8c4b8, #9b7b8a, #e8c4b8)",
              }}
            />
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4"
              style={{ borderColor: "var(--cream)" }}
            >
              <Image
                src="/portrait.jpg"
                alt="Akanksha Wadhwan"
                fill
                className="object-cover object-[60%_20%]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
