"use client";

import { motion } from "framer-motion";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div
      id="about"
      className="text-slate-800 w-full py-10 px-6 flex flex-col justify-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex justify-center mt-8">
        <motion.div
          className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 shadow-sm text-sm">
              <p className="text-slate-400 mb-4">// about.ts</p>
              <pre className="text-slate-600 whitespace-pre-wrap break-words">
                {`/**
 * Hey there! I'm Vageesh — a full-stack developer who loves
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
