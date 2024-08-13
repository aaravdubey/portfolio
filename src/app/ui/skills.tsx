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
    { name: "javascript", icon: <SiJavascript className="text-6xl" /> },
    { name: "java", icon: <FaJava className="text-6xl" /> },
    { name: "python", icon: <SiPython className="text-6xl" /> },
    { name: "node", icon: <FaNode className="text-6xl" /> },
    { name: "react", icon: <FaReact className="text-6xl" /> },
    { name: "next", icon: <SiNextdotjs className="text-6xl" /> },
    { name: "flask", icon: <SiFlask className="text-6xl" /> },
    { name: "express", icon: <SiExpress className="text-6xl" /> },
    { name: "mongoDB", icon: <SiMongodb className="text-6xl" /> },
    { name: "postgres", icon: <BiLogoPostgresql className="text-6xl" /> },
    { name: "git", icon: <FaGitAlt className="text-6xl" /> },
  ];

  const tools = [
    { name: "vs code", icon: <SiVisualstudiocode className="text-6xl" /> },
    { name: "github", icon: <FaGithub className="text-6xl" /> },
    { name: "postman", icon: <SiPostman className="text-6xl" /> },
    { name: "figma", icon: <SiFigma className="text-6xl" /> },
    { name: "photoshop", icon: <SiAdobephotoshop className="text-6xl" /> },
    { name: "vercel", icon: <SiVercel className="text-6xl" /> },
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        opacity: { duration: delay + 0.4 },
        duration: 0.4,
        delay: delay,
      },
    }),
  };

  return (
    <div className="h-screen flex flex-col py-10 px-36 text-grey">
      <h1 className={`${heading.className} text-4xl tracking-wider`}>
        My Skillset
      </h1>

      <div className={`${text.className} my-10 flex flex-wrap gap-5`}>
        {skills.map((skill, index) => (
          <motion.div
            className="w-32 flex flex-col items-center gap-4 bg-zinc-900 tracking-wider rounded-lg p-5 font-semibold transition-colors duration-200 hover:bg-zinc-800"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            custom={index * 0.1}
            variants={cardVariants}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <h1 className={`${heading.className} text-4xl tracking-wider`}>
        Tools I Use
      </h1>

      <motion.div className={`${text.className} my-10 flex flex-wrap gap-5`}>
        {tools.map((tool, index) => (
          <motion.div
            className="w-32 flex flex-col items-center gap-4 bg-zinc-900 tracking-wider rounded-lg p-5 font-semibold transition-colors duration-200 hover:bg-zinc-800"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.1 }}
            custom={index * 0.1}
            variants={cardVariants}
          >
            {tool.icon}
            <p>{tool.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
