"use client";

import { JSX } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaJava, FaWindows } from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiExpress,
  SiLinux,
  SiNixos,
  SiPython,
  SiGraphql,
  SiCloudinary,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const stack = {
  Frontend: ["Next.js", "Tailwind CSS", "Flutter"],
  Backend: ["GraphQL", "Node.js(Express)", "Prisma", "FastAPI"],
  Languages: ["C++", "Java", "Python", "TypeScript"],
  Database: ["PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "Figma", "Linux", "Nix", "Cloudinary"],
};

const techIcons: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs className="mr-2 inline" />,
  "Tailwind CSS": <SiTailwindcss className="mr-2 inline" />,
  TypeScript: <SiTypescript className="mr-2 inline" />,
  Flutter: <SiFlutter className="mr-2 inline" />,
  FastAPI: <SiFastapi className="mr-2 inline" />,
  "Node.js(Express)": <SiNodedotjs className="mr-2 inline" />,
  Prisma: <SiPrisma className="mr-2 inline" />,
  GraphQL: <SiGraphql className="mr-2 inline" />,
  PostgreSQL: <SiPostgresql className="mr-2 inline" />,
  MongoDB: <SiMongodb className="mr-2 inline" />,
  Git: <SiGit className="mr-2 inline" />,
  Docker: <SiDocker className="mr-2 inline" />,
  Figma: <SiFigma className="mr-2 inline" />,
  Linux: <SiLinux className="mr-2 inline" />,
  Nix: <SiNixos className="mr-2 inline" />,
  "C++": <TbBrandCpp className="mr-2 inline" />,
  Java: <FaJava className="mr-2 inline" />,
  Python: <SiPython className="mr-2 inline" />,
  Cloudinary: <SiCloudinary className="mr-2 inline" />,
};

const TechStack = () => {
  const prefersReducedMotion = useReducedMotion();
  const fast = prefersReducedMotion ? { duration: 0, delay: 0 } : {};

  return (
    <div className="w-full space-y-8">
      {Object.entries(stack).map(([category, tools], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ...fast }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h4 className="text-base font-semibold tracking-wide text-slate-700 dark:text-slate-300">
            {category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {tools.map((tech) => (
              <span
                key={tech}
                className="flex items-center rounded-full bg-slate-900 px-4 py-2 font-mono text-sm text-slate-100 dark:bg-slate-700"
              >
                {techIcons[tech]} {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
