import { JSX } from "react";
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
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const stack = {
  Frontend: ["Next.js", "Tailwind CSS", "TypeScript", "Flutter"],
  Backend: ["FastAPI", "Node.js", "Express.js", "Prisma"],
  Languages: ["C++", "Java", "Python"],
  Database: ["PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "Figma", "Linux", "Windows", "Nix"],
};

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="inline mr-2" />,
  "Next.js": <SiNextdotjs className="inline mr-2" />,
  "Tailwind CSS": <SiTailwindcss className="inline mr-2" />,
  TypeScript: <SiTypescript className="inline mr-2" />,
  Flutter: <SiFlutter className="inline mr-2" />,
  FastAPI: <SiFastapi className="inline mr-2" />,
  "Node.js": <SiNodedotjs className="inline mr-2" />,
  "Express.js": <SiExpress className="inline mr-2" />,
  Prisma: <SiPrisma className="inline mr-2" />,
  PostgreSQL: <SiPostgresql className="inline mr-2" />,
  MongoDB: <SiMongodb className="inline mr-2" />,
  Git: <SiGit className="inline mr-2" />,
  Docker: <SiDocker className="inline mr-2" />,
  Figma: <SiFigma className="inline mr-2" />,
  Linux: <SiLinux className="inline mr-2" />,
  Windows: <FaWindows className="inline mr-2" />,
  Nix: <SiNixos className="inline mr-2" />,
  "C++": <TbBrandCpp className="inline mr-2" />,
  Java: <FaJava className="inline mr-2" />,
  Python: <SiPython className="inline mr-2" />,
};

const TechStack = () => {
  return (
    <div className="space-y-6 w-full">
      <h3 className="text-xl font-semibold text-slate-700">Tech Stack</h3>
      <div className="space-y-6">
        {Object.entries(stack).map(([category, tools]) => (
          <div key={category} className="space-y-2">
            <h4 className="text-base font-medium">{category}</h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm  bg-slate-900 text-slate-100 flex items-center"
                >
                  {techIcons[tech]} {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
