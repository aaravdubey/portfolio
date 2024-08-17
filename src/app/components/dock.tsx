"use client";

import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { SiAboutdotme } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Dock() {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainHeight =
        document.querySelector("#main-component")?.offsetHeight || 0;
      setShowDock(window.scrollY > mainHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showDock && (
          <div className="fixed inset-y-0 right-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className=" flex flex-col gap-1 items-center bg-[#09090b] rounded-3xl px-3 py-6 z-10 border space-x-0.5 border-[#2d2d32]"
            >
              <Tooltip title="About" {...tooltipOptions}>
                <Link
                  activeClass="dock-active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-lg p-3 rounded-full hover:text-white transition-colors"
                >
                  <SiAboutdotme />
                </Link>
              </Tooltip>

              <Tooltip title="Projects" {...tooltipOptions}>
                <Link
                  activeClass="dock-active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-lg p-3 rounded-full hover:text-white transition-colors"
                >
                  <FaCode />
                </Link>
              </Tooltip>
              <Tooltip title="Experience" {...tooltipOptions}>
                <Link
                  activeClass="dock-active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-lg p-3 rounded-full hover:text-white transition-colors"
                >
                  <MdOutlineWorkOutline />
                </Link>
              </Tooltip>
              <Tooltip title="Skills" {...tooltipOptions}>
                <Link
                  activeClass="dock-active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-lg p-3 rounded-full hover:text-white transition-colors"
                >
                  <FaReact />
                </Link>
              </Tooltip>

              <hr className="w-full mb-2 border-[#2d2d32]" />

              <a
                href="https://github.com/aaravdubey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-lg p-3 rounded-full hover:text-white transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aaravdubey/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-lg p-3 rounded-full hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

const tooltipOptions = {
  position: "left",
  trigger: "mouseenter",
  animation: "perspective",
  distance: 15,
  // transitionFlip: true,
  // followCursor: true, // Uncomment if needed
};
