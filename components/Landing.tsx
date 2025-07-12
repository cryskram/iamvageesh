"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const terminalLines = [
  "booting developer profile...",
  "loading passions → code, open source, cartoons",
  "launching portfolio → success ✅",
];

const TYPE_SPEED = 40;
const LINE_DELAY = 1000;

const Landing = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length || !isTyping) return;

    const line = terminalLines[currentLineIndex];

    const interval = setInterval(() => {
      const nextCharIndex = currentCharIndex + 1;
      const nextText = line.slice(0, nextCharIndex);

      setCurrentText(nextText);
      setCurrentCharIndex(nextCharIndex);

      if (nextCharIndex > line.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setLines((prev) => [...prev, line]);
          setCurrentText("");
          setCurrentCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
          setIsTyping(true);
        }, LINE_DELAY);
      }
    }, TYPE_SPEED);

    return () => clearInterval(interval);
  }, [currentLineIndex, currentCharIndex, isTyping]);

  return (
    <div
      id="landing"
      className="min-h-screen w-full bg-slate-200 flex flex-col justify-center items-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative pl-6 border-l-4 border-slate-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wide text-slate-600">
            Developer. Problem Solver. Builder.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mt-2">
            Hey, I'm <span className="text-slate-500">Vageesh</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg mt-4">
            Designing smooth interfaces and engineering robust logic — with
            precision and care.
          </p>

          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-6 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-md border border-slate-400 text-slate-700 hover:bg-slate-200 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-slate-900 rounded-lg p-6 shadow-2xl text-sm text-slate-700"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-2 text-slate-400 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2">// Terminal</span>
          </div>

          <div className="bg-slate-800 text-slate-200 p-4 rounded-md min-h-[140px] whitespace-pre-wrap font-mono">
            {lines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            {currentLineIndex < terminalLines.length && (
              <div>
                {currentText}
                <span className="animate-pulse text-slate-200">|</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="#about"
          className="text-slate-500 inline-flex items-center gap-1 hover:text-slate-700 transition-all duration-150"
        >
          <FaArrowCircleDown /> scroll to about
        </Link>
      </motion.div>
    </div>
  );
};

export default Landing;
