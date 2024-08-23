import { text, heading } from "./fonts";
import { FaReact, FaNode, FaGithub, FaJava, FaGitAlt } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiPython,
  SiFlask,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiVercel,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { Variants, motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "javascript",
      icon: <SiJavascript className="text-4xl md:text-6xl" />,
    },
    {
      name: "java",
      icon: <FaJava className="text-4xl md:text-6xl" />,
    },
    {
      name: "python",
      icon: <SiPython className="text-4xl md:text-6xl" />,
    },
    {
      name: "node",
      icon: <FaNode className="text-4xl md:text-6xl" />,
    },
    {
      name: "react",
      icon: <FaReact className="text-4xl md:text-6xl" />,
    },
    {
      name: "next",
      icon: <SiNextdotjs className="text-4xl md:text-6xl" />,
    },
    {
      name: "flask",
      icon: <SiFlask className="text-4xl md:text-6xl" />,
    },
    {
      name: "express",
      icon: <SiExpress className="text-4xl md:text-6xl" />,
    },
    {
      name: "mongoDB",
      icon: <SiMongodb className="text-4xl md:text-6xl" />,
    },
    {
      name: "postgres",
      icon: <BiLogoPostgresql className="text-4xl md:text-6xl" />,
    },
    {
      name: "git",
      icon: <FaGitAlt className="text-4xl md:text-6xl" />,
    },
  ];

  const tools = [
    {
      name: "vs code",
      icon: <SiVisualstudiocode className="text-4xl md:text-6xl" />,
    },
    {
      name: "github",
      icon: <FaGithub className="text-4xl md:text-6xl" />,
    },
    {
      name: "postman",
      icon: <SiPostman className="text-4xl md:text-6xl" />,
    },
    {
      name: "figma",
      icon: <SiFigma className="text-4xl md:text-6xl" />,
    },
    {
      name: "photoshop",
      icon: <SiAdobephotoshop className="text-4xl md:text-6xl" />,
    },
    {
      name: "vercel",
      icon: <SiVercel className="text-4xl md:text-6xl" />,
    },
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        opacity: { duration: delay + 0.4 },
        duration: 0.4,
        delay: delay,
      },
    }),
  };

  return (
    <div
      id="skills"
      className="flex flex-col pt-14 px-5 sm:px-10 xl:px-36 text-grey"
    >
      <h1
        className={`${heading.className} text-3xl md:text-4xl tracking-wider flex justify-between`}
      >
        <span className="relative">My Skillset</span>
        <div className="w-0 h-0 bg-transparent rounded-full shadow-[0_0_350px_200px_rgba(30,41,59,0.8)] bg-slate-800"></div>
      </h1>

      <div
        className={`${text.className} my-10 grid grid-cols-3 sm:grid-cols-4 md:flex flex-wrap gap-5`}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="md:w-32 flex flex-col items-center gap-4 bg-gray-900 tracking-wider rounded-lg p-3 md:p-5 font-semibold transition-colors duration-200 hover:bg-gray-800 saturate-[.6]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            custom={index * 0.1}
            variants={cardVariants}
          >
            {skill.icon}
            <p className="text-xs md:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <h1
        className={`${heading.className} text-3xl md:text-4xl tracking-wider`}
      >
        Tools I Use
        <div className="w-0 h-0 bg-transparent rounded-full shadow-[0_0_350px_200px_rgba(30,41,59,0.8)] bg-slate-800"></div>
      </h1>

      <motion.div
        className={`${text.className} my-10 grid grid-cols-3 sm:grid-cols-4 md:flex flex-wrap gap-5`}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="md:w-32 flex flex-col items-center gap-4 bg-gray-900 tracking-wider rounded-lg p-3 md:p-5 font-semibold transition-colors duration-200 hover:bg-gray-800 saturate-[.6]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            custom={index * 0.1}
            variants={cardVariants}
          >
            {tool.icon}
            <p className="text-xs md:text-base">{tool.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
