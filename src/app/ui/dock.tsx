import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-away-subtle.css";
import "tippy.js/themes/translucent.css";
import Tippy from "@tippyjs/react";
import { forwardRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { SiAboutdotme } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const AboutLink = forwardRef<HTMLSpanElement>((props, ref) => (
  <span ref={ref}>
    <Link
      activeClass="dock-active"
      to="about"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-sm md:text-lg p-1.5 md:p-3 rounded-full hover:text-white transition-colors"
    >
      <SiAboutdotme />
    </Link>
  </span>
));

AboutLink.displayName = "AboutLink";

const ProjectsLink = forwardRef<HTMLSpanElement>((props, ref) => (
  <span ref={ref}>
    <Link
      activeClass="dock-active"
      to="projects"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-sm md:text-lg p-1.5 md:p-3 rounded-full hover:text-white transition-colors"
    >
      <FaCode />
    </Link>
  </span>
));

ProjectsLink.displayName = "ProjectsLink";

const ExperienceLink = forwardRef<HTMLSpanElement>((props, ref) => (
  <span ref={ref}>
    <Link
      activeClass="dock-active"
      to="experience"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-sm md:text-lg p-1.5 md:p-3 rounded-full hover:text-white transition-colors"
    >
      <MdOutlineWorkOutline />
    </Link>
  </span>
));

ExperienceLink.displayName = "ExperienceLink";

const SkillsLink = forwardRef<HTMLSpanElement>((props, ref) => (
  <span ref={ref}>
    <Link
      activeClass="dock-active"
      to="skills"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-sm md:text-lg p-1.5 md:p-3 rounded-full hover:text-white transition-colors"
    >
      <FaReact />
    </Link>
  </span>
));

SkillsLink.displayName = "SkillsLink";

export default function Dock() {
  const [showDock, setShowDock] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      const mainComponent = document.querySelector(
        "#main-component"
      ) as HTMLElement | null;
      const mainHeight = mainComponent?.offsetHeight || 0;
      setShowDock(window.scrollY > mainHeight / 2);

      // Set scrolling state to true
      setIsScrolling(true);

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Hide the dock after 2 seconds of inactivity
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showDock && isScrolling && (
          <div className="fixed inset-y-0 right-2 md:right-8 flex items-center z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className=" flex flex-col gap-1 items-center bg-[#09090b] rounded-3xl p-1 md:px-3 py-2 md:py-6 z-10 border space-x-0.5 border-[#2d2d32]"
            >
              <Tippy
                content="About"
                arrow={false}
                placement="left"
                animation="shift-away"
                theme="translucent"
              >
                <AboutLink />
              </Tippy>

              <Tippy
                content="Projects"
                arrow={false}
                placement="left"
                animation="shift-away"
                theme="translucent"
              >
                <ProjectsLink />
              </Tippy>

              <Tippy
                content="Experience"
                arrow={false}
                placement="left"
                animation="shift-away"
                theme="translucent"
              >
                <ExperienceLink />
              </Tippy>

              <Tippy
                content="Skills"
                arrow={false}
                placement="left"
                animation="shift-away"
                theme="translucent"
              >
                <SkillsLink />
              </Tippy>

              <hr className="w-full mb-2 border-[#2d2d32]" />

              <a
                href="https://github.com/aaravdubey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-sm md:text-lg p-1.5 md:p-3 rounded-full hover:text-white transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aaravdubey/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:bg-slate-600 hover:bg-opacity-20 text-sm md:text-lg p-1.5 md:p-3 rounded-full hover:text-white transition-colors"
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
