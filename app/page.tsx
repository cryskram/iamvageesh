import dynamic from "next/dynamic";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Landing = dynamic(() => import("@/components/Landing"), {
  ssr: true,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
