"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Personal Portfolio v2",
    description: "Second version(current) of my personal portfolio website.",
    tech: ["Next.js", "Tailwind", "UI/UX"],
    github: "https://github.com/cryskram/iamvageesh",
    demo: "https://iamvageesh.vercel.app/",
    image: "/projects/portfolio2.png",
  },
  {
    name: "BuzzBoard",
    description:
      "A lightweight, anonymous polling platform for instant public opinion sharing.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Prisma", "GraphQL"],
    github: "https://github.com/cryskram/buzzboard",
    demo: "https://buzzboard.vercel.app/",
    image: "/projects/buzzboard.png",
  },
  {
    name: "SnapDrop",
    description:
      "A simple, autosaving note-sharing app designed for quick, login-free collaboration.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Prisma", "GraphQL"],
    github: "https://github.com/cryskram/snapdrop",
    demo: "https://snapdropweb.vercel.app/",
    image: "/projects/snapdrop.png",
  },
  {
    name: "ImageSpam",
    description:
      "A simple image uploader with auth and multi-framework support.",
    tech: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Prisma",
      "GraphQL",
      "Firebase",
      "FullStack",
    ],
    github: "https://github.com/cryskram/learnauthgraphql",
    demo: "https://learnauthgraphql.vercel.app/",
    image: "/projects/imagespam.png",
  },
  {
    name: "TechX Bangalore 2024 Website",
    description: "Website for the award winning TechX Bangalore 2024 event.",
    tech: ["Next.js", "Tailwind", "Typescript", "UI/UX"],
    demo: "https://techx-website-new.vercel.app/",
    image: "/projects/techx.png",
  },
  {
    name: "TechX SYP",
    description: "Website of IEEE Computer Society SYP TechX 2024.",
    tech: ["Next.js", "Tailwind", "Typescript", "DSA"],
    demo: "https://techxsyp.vercel.app/",
    image: "/projects/techxsyp.png",
  },
  {
    name: "MiniFyr",
    description: "A simple URL Shortner website.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Prisma"],
    github: "https://github.com/cryskram/minifyr",
    demo: "https://minifyr.vercel.app/",
    image: "/projects/minifyr.png",
  },
  {
    name: "ModelCraft",
    description:
      "A web app to train and test ML models on custom CSVs. Built with FastAPI, Next.js, and Tailwind.",
    tech: ["FastAPI", "Next.js", "Tailwind", "Python"],
    github: "https://github.com/cryskram/algopred",
    image: "/projects/modelcraft.png",
  },
  {
    name: "Algorithms Sorting Visualizer",
    description: "Visualize different sorting design techniques in DSA.",
    tech: ["Next.js", "Tailwind", "Typescript", "DSA"],
    github: "https://github.com/cryskram/sortingalgo",
    demo: "https://sortingalgo.vercel.app/",
    image: "/projects/asv.png",
  },
  {
    name: "Attendance Management",
    description: "A project built as a peer learning program instructor.",
    tech: [
      "Next.js",
      "Tailwind",
      "Typescript",
      "MongoDB",
      "Full Stack",
      "Prisma",
    ],
    github: "https://github.com/cryskram/webdevpeersesh",
    demo: "https://webdevpeersesh.vercel.app/",
    image: "/projects/attendance.png",
  },
  {
    name: "DropConnect",
    description: "A social media website.",
    tech: [
      "Next.js",
      "Tailwind",
      "Typescript",
      "PostgreSQL",
      "Full Stack",
      "Prisma",
    ],
    github: "https://github.com/cryskram/dropconnect",
    demo: "https://dropconnect.vercel.app/",
    image: "/projects/dropconnect.png",
  },
  {
    name: "Nrittam",
    description: "AI Powered Clasical Dance Buddy(frontend).",
    tech: ["Flutter", "Frontend"],
    github: "https://github.com/cryskram/nrittam",
    image: "/projects/nrittam.jpeg",
  },
  {
    name: "Portfolio Website v1",
    description: "First version of personal portfolio website.",
    tech: ["Next.js", "Tailwind", "UI/UX"],
    github: "https://github.com/cryskram/portfolio",
    demo: "https://iamvageesh1.vercel.app/",
    image: "/projects/portfolio.png",
  },
  {
    name: "Quizo",
    description: "A simple quiz platform.",
    tech: ["Next.js", "Tailwind", "UI/UX"],
    github: "https://github.com/cryskram/quizo",
    demo: "https://quizo-puce.vercel.app/",
    image: "/projects/quizo.png",
  },
  {
    name: "CyberSpiders",
    description: "A hackernews aggregator for a codejam.",
    tech: ["Next.js", "Tailwind", "Django", "Python", "Full Stack"],
    github: "https://github.com/CyberSpiders/cyberspider",
    demo: "https://cyberspiders.vercel.app/",
    image: "/projects/cyberspider.png",
  },
  {
    name: "DiscoGen",
    description: "A Discord bot generator with a few prompts.",
    tech: ["Javascript", "Discord Bot", "Package", "NPM"],
    github: "https://github.com/Discogen/discogen",
    demo: "https://www.npmjs.com/package/discogen",
    image: "/projects/discogenImg.png",
  },
  {
    name: "Bilobe",
    description: "A simply toy programming language.",
    tech: ["Language", "C++", "CMake", "Package"],
    github: "https://github.com/cryskram/bilobe",
    image: "/projects/bilobe.png",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full py-20 px-6 flex justify-center text-slate-800"
    >
      <motion.div
        className="max-w-6xl w-full space-y-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center"
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
              key={idx}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden flex flex-col"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="w-full md:h-52 object-cover object-top border-b border-slate-200"
                />
              )}

              <div className="p-6 space-y-4 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-800"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-800"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-900 text-slate-100 text-sm px-3 py-1 rounded-full"
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
