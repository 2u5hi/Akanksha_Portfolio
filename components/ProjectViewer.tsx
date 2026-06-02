"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Download } from "lucide-react";

interface ProjectFile {
  label: string;
  url: string;
  type: "pdf" | "xlsx";
}

interface ProjectViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  files: ProjectFile[];
}

export default function ProjectViewer({
  isOpen,
  onClose,
  title,
  files,
}: ProjectViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = files[activeIndex];
  const isPdf = active?.type === "pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#2c3e50]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#faf8f5" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "#e8c4b8" }}
            >
              <div>
                <h3
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-lg font-semibold text-[#2c3e50]"
                >
                  {title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="text-xs text-[#7a7a7a] mt-0.5"
                >
                  {active?.label}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* File tabs */}
                {files.length > 1 && (
                  <div className="hidden sm:flex items-center gap-1 mr-2">
                    {files.map((f, i) => (
                      <button
                        key={f.url}
                        onClick={() => setActiveIndex(i)}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                          i === activeIndex
                            ? "bg-[#c97b6b] text-white"
                            : "text-[#7a7a7a] hover:text-[#c97b6b]"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                )}

                <a
                  href={active?.url}
                  download
                  className="p-2 rounded-full hover:bg-[#e8c4b8]/40 text-[#7a7a7a] hover:text-[#c97b6b] transition-all"
                  title="Download"
                >
                  <Download size={16} />
                </a>
                <a
                  href={active?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#e8c4b8]/40 text-[#7a7a7a] hover:text-[#c97b6b] transition-all"
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[#e8c4b8]/40 text-[#7a7a7a] hover:text-[#2c3e50] transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Mobile file tabs */}
            {files.length > 1 && (
              <div
                className="sm:hidden flex gap-2 px-4 py-2 border-b overflow-x-auto"
                style={{ borderColor: "#e8c4b8" }}
              >
                {files.map((f, i) => (
                  <button
                    key={f.url}
                    onClick={() => setActiveIndex(i)}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                      i === activeIndex
                        ? "bg-[#c97b6b] text-white"
                        : "text-[#7a7a7a]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active?.url}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  {isPdf ? (
                    <iframe
                      src={`${active.url}#toolbar=0&navpanes=0`}
                      className="w-full h-full"
                      title={active.label}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#e8c4b8" }}
                      >
                        <span
                          style={{ fontFamily: "var(--font-playfair)" }}
                          className="text-[#c97b6b] text-sm font-semibold"
                        >
                          .xlsx
                        </span>
                      </div>
                      <div className="text-center">
                        <p
                          style={{ fontFamily: "var(--font-playfair)" }}
                          className="text-xl font-semibold text-[#2c3e50] mb-2"
                        >
                          {active.label}
                        </p>
                        <p
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                          className="text-[#7a7a7a] text-sm mb-6"
                        >
                          Excel files can&apos;t be previewed in the browser. Download it
                          or open it online to take a look.
                        </p>
                        <div className="flex gap-3 justify-center">
                          <a
                            href={active.url}
                            download
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                            className="px-6 py-2.5 bg-[#c97b6b] text-white rounded-full text-sm hover:bg-[#b56b5b] transition-all"
                          >
                            Download File
                          </a>
                          <a
                            href={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
                              typeof window !== "undefined"
                                ? `${window.location.origin}${active.url}`
                                : active.url
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                            className="px-6 py-2.5 border border-[#c97b6b] text-[#c97b6b] rounded-full text-sm hover:bg-[#c97b6b] hover:text-white transition-all"
                          >
                            View Online
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav arrows for multi-file (mobile) */}
            {files.length > 1 && (
              <div className="sm:hidden flex justify-between items-center px-4 py-3 border-t" style={{ borderColor: "#e8c4b8" }}>
                <button
                  onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                  disabled={activeIndex === 0}
                  className="p-2 disabled:opacity-30 text-[#7a7a7a]"
                >
                  <ChevronLeft size={20} />
                </button>
                <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#7a7a7a]">
                  {activeIndex + 1} / {files.length}
                </span>
                <button
                  onClick={() => setActiveIndex((i) => Math.min(files.length - 1, i + 1))}
                  disabled={activeIndex === files.length - 1}
                  className="p-2 disabled:opacity-30 text-[#7a7a7a]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
