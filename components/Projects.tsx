"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const fast = prefersReducedMotion ? { duration: 0, delay: 0 } : {};

  return (
    <div
      id="projects"
      className="flex w-full justify-center px-6 py-20 text-slate-800 dark:text-slate-200"
    >
      <motion.div
        className="w-full max-w-6xl space-y-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-center text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ...fast }}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="w-full border-b border-slate-200 object-cover object-top md:h-52 dark:border-slate-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}

              <div className="flex h-full flex-col space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                        aria-label={`View ${project.name} live demo`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-900 px-3 py-1 text-sm text-slate-100 dark:bg-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
