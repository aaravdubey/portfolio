import { useEffect, useState } from "react";
import { text, heading } from "./fonts";
import { Variants, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Intervo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15733943/file/original-8841d7652d6f7fe323e08b64a61e9c3f.jpg?resize=320x240&vertical=center",
  },
  {
    id: 2,
    name: "Project 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15712729/file/original-c855bfddb767d725619b03bd849f58aa.png?resize=320x240&vertical=center",
  },
  {
    id: 3,
    name: "Project 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15785690/file/still-21aa4d2295cfdb49d3604d16608aea61.png?resize=320x240&vertical=center",
  },
  // Add more projects as needed
];

const cardVariants: Variants = {
  offscreen: {
    x: -30,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      opacity: { duration: 0.4 },
      duration: 1,
    },
  },
};

const nameVariants: Variants = {
  offscreen: {
    x: 30,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      opacity: { duration: 0.4 },
      duration: 1,
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Set initial project
  const [prevProject, setPrevProject] = useState(selectedProject);

  useEffect(() => {
    setPrevProject(selectedProject);
  }, [selectedProject]);

  return (
    <div
      id="projects"
      className="h-screen flex flex-col gap-10 relative px-36 py-10"
    >
      <div className="w-0 h-0 bg-transparent rounded-full shadow-[0_0_350px_200px_rgba(30,41,59,0.4)] bg-slate-800 absolute right-0 top-1/2"></div>
      <h1
        className={`${heading.className} text-4xl font-bold text-slate-300 tracking-wider`}
      >
        {"< PROJECTS />"}
      </h1>

      <div className="flex-1 flex gap-5 h-screen">
        {/* Left Side: Selected Project Image */}
        <motion.div
          className="w-4/5 p-4 flex items-center justify-center rounded-lg relative overflow-hidden group"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          // custom={index * 0.1}
          variants={cardVariants}
        >
          <img
            src={selectedProject.imageUrl}
            alt={selectedProject.name}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out absolute brightness-75 group-hover:brightness-100 ${
              prevProject.id === selectedProject.id
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
          <div className="group-hover:hidden absolute h-full w-full tint"></div>
          {/* <img
            src={prevProject.imageUrl}
            alt={prevProject.name}
            className={`transition-opacity duration-700 ease-in-out absolute ${
              prevProject.id !== selectedProject.id
                ? "opacity-100"
                : "opacity-0"
            }`}
          /> */}
          <div
            className={`${text.className} text-zinc-300 absolute inset-x-0 left-0 z-10 h-full bg-gradient-to-r from-[#09090b] to-transpare flex transition ease-in-out duration-100 flex-col text-left items-start py-10 gap-5 tracking-wide`}
          >
            <p className="text-3xl font-bold tracking-wider">
              {selectedProject.name}
            </p>
            <p className="w-[40%]">{selectedProject.text}</p>
            <div className="flex gap-2">
              {selectedProject.stack.map((stack) => {
                return (
                  <span
                    key={stack}
                    className="bg-zinc-700 rounded-3xl px-2 py-1 text-sm"
                  >
                    {stack}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Side: List of Projects */}
        <div className="w-1/5 p-0 overflow-y-auto overflow-x-hidden">
          {/* <h2 className="text-xl font-semibold mb-4">Projects</h2> */}
          <ul
            className={`${text.className} flex flex-col gap-5 justify-end h-full tracking-widest`}
          >
            {projects.map((project) => (
              <motion.li
                key={project.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.4 }}
                // custom={index * 0.1}
                variants={nameVariants}
                className={`p-4 cursor-pointer rounded-md ${
                  selectedProject.id === project.id
                    ? "bg-slate-800 text-zinc-300 border border-slate-800"
                    : "bg-transparent border border-gray-600 border-opacity-45"
                } hover:bg-slate-700 transition-colors group flex justify-between`}
                onClick={() => setSelectedProject(project)}
              >
                <span
                  className={`${
                    selectedProject.id === project.id
                      ? "w-6 scale-150 opacity-100"
                      : "w-0 scale-0 opacity-0"
                  } flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-150 group-hover:w-6 group-hover:opacity-100`}
                >
                  {"<"}
                </span>
                {project.name}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
