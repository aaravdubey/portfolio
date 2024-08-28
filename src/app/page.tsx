"use client";

import Dock from "./ui/dock";
import About from "./ui/about";
import Exp from "./ui/exp";
import Main from "./ui/main";
import Projects from "./ui/projects";
import Skills from "./ui/skills";
import { useEffect, useState } from "react";
import Loading from "./ui/loading";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loading />;

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
