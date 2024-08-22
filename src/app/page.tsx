"use client";

import Dock from "./ui/dock";
import About from "./ui/about";
import Exp from "./ui/exp";
import Main from "./ui/main";
import Projects from "./ui/projects";
import Skills from "./ui/skills";

export default function Home() {
  return (
    <div className="text-zinc-300 overflow-hidden">
      <div id="main-component">
        <Main />
      </div>
      <About />
      <Projects />
      <Exp />
      <Skills />
      <Dock />
    </div>
  );
}
