"use client";

import { motion, useReducedMotion } from "framer-motion";
import TechStack from "./TechStack";

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const fast = prefersReducedMotion ? { duration: 0, delay: 0 } : {};

  return (
    <div
      id="about"
      className="flex w-full flex-col justify-center px-6 py-10 text-slate-800 dark:text-slate-200"
    >
      <motion.h2
        className="text-center text-3xl font-semibold md:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ...fast }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="mt-8 flex justify-center">
        <motion.div
          className="flex w-full max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ...fast }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ...fast }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-slate-300 bg-slate-100 p-6 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="mb-4 text-slate-400 dark:text-slate-500">// about.ts</p>
              <pre className="break-words whitespace-pre-wrap text-slate-600 dark:text-slate-400">
                {`/**
 * Hey there! I'm Vageesh - a full-stack developer who loves
 * building beautiful frontends and powerful backends.
 *
 * From tinkering with micro-interactions to architecting scalable APIs,
 * I enjoy transforming ideas into efficient, elegant systems.
 *
 * I'm particularly into web and app development,
 * and open-source projects.
 *
 * Outside of code, I enjoy learning new things,
 * watching cartoons, and of course sleeping.
 */`}
              </pre>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <TechStack />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
