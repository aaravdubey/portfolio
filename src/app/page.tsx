"use client";

import Dock from "./ui/dock";
import About from "./ui/about";
import Exp from "./ui/exp";
import Main from "./ui/main";
import Projects from "./ui/projects";
import Skills from "./ui/skills";
import { useEffect, useState } from "react";
import Loading from "./ui/loading";
import Resume from "./ui/resume";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isFading, setIsFading] = useState(false); 
  const [isResume, setIsResume] = useState(false);

  useEffect(() => {
      setIsFading(true);
      const hideLoadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500); 

      return () => clearTimeout(hideLoadingTimer);

  }, []);

  return (
    <div className="text-zinc-300 overflow-hidden relative">
      {/* Render the loading screen if loading is active */}
      {isLoading && <Loading isFading={isFading} />}
      
      {/* Render main content with a fade-in effect */}
      {!isLoading && (
        <div
          className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        >
          <Main setIsResume={setIsResume} />
          <About />
          <Projects />
          <Exp />
          <Skills />
          <Dock />
          <Resume isResume={isResume} setIsResume={setIsResume} />
        </div>
      )}
    </div>
  );
}
