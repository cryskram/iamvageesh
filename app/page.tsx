import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

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
