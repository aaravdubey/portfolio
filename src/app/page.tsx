"use client";

import About from "./ui/about";
import Main from "./ui/main";
import Projects from "./ui/projects";
import Skills from "./ui/skills";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-zinc-300">
      <Main />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
