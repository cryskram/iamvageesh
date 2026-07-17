"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import VageeshOS from "./VageeshOS/VageeshOS";

type TerminalState = "booting" | "ready" | "expanded";

const terminalLines = [
  "booting developer profile...",
  "loading passions → code, open source, cartoons",
  "launching portfolio → success ✅",
];

const TYPE_SPEED = 40;
const LINE_DELAY = 1000;

const Landing = () => {
  const prefersReducedMotion = useReducedMotion();
  const fast = prefersReducedMotion ? { duration: 0 } : {};

  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const [terminalState, setTerminalState] = useState<TerminalState>("booting");

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
      className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-200 px-6 py-16 dark:bg-slate-950"
    >
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          className="relative border-l-4 border-slate-300 pl-6 dark:border-slate-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ...fast }}
        >
          <p className="text-sm tracking-wide text-slate-600 uppercase dark:text-slate-400">
            Developer. Problem Solver. Builder.
          </p>

          <h1 className="mt-2 text-4xl leading-tight font-bold text-slate-800 md:text-5xl dark:text-slate-100">
            Hey, I'm <span className="text-slate-500 dark:text-slate-400">Vageesh</span>
          </h1>

          <p className="mt-4 text-base text-slate-600 md:text-lg dark:text-slate-400">
            Designing smooth interfaces and engineering robust logic - with
            precision and care.
          </p>

          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ...fast }}
          >
            <Link
              href="#projects"
              className="rounded-md bg-slate-800 px-6 py-2 text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              View Projects
            </Link>
            <Link
              download
              href="/files/Resume.pdf"
              className="rounded-md border border-slate-400 px-6 py-2 text-slate-700 transition hover:bg-slate-200 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Download Resume (PDF)"
            >
              Download Resume
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ...fast }}
        >
          <VageeshOS />
        </motion.div>
      </div>

      <motion.div
        className="mt-16 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, ...fast }}
      >
        <Link
          href="#about"
          className="inline-flex items-center gap-1 text-slate-500 transition-all duration-150 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <FaArrowCircleDown /> scroll to about
        </Link>
      </motion.div>
    </div>
  );
};

export default Landing;
