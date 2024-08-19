import { useEffect, useState } from "react";
import { text, heading } from "./fonts";
import { Variants, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Set initial project

  return (
    <div
      id="projects"
      className="h-screen flex flex-col gap-10 relative px-36 py-10"
    >
      <div className="w-0 h-0 bg-transparent rounded-full shadow-[0_0_350px_200px_rgba(30,41,59,0.7)] bg-slate-800 absolute right-0 top-1/2"></div>
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
          <Image
            src={selectedProject.imageUrl}
            alt={selectedProject.name}
            layout="fill"
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out absolute brightness-75 group-hover:brightness-100 transition-transform transform group-hover:scale-[1.008]`}
          />

          <div className="absolute h-full w-full transition-opacity duration-700 ease-in-out tint group-hover:opacity-0" />

          <div
            className={`${text.className} text-zinc-300 absolute inset-x-0 left-0 z-10 h-full bg-gradient-to-r from-[#09090b] to-transpare flex transition ease-in-out duration-100 flex-col text-left items-start py-10 gap-5 tracking-wide`}
          >
            <p className="text-3xl font-bold tracking-wider">
              {selectedProject.name}
            </p>
            <ul className="w-[40%]">
              {selectedProject.text.map((text) => (
                <li key={text} className="text-sm mb-2">
                  - {text}
                </li>
              ))}
            </ul>
            {/* <p className="w-[40%]">{selectedProject.text}</p> */}
            <div className="flex flex-wrap gap-2 w-[40%]">
              {selectedProject.stack.map((stack, index) => {
                return (
                  <span
                    key={index}
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
            className={`${text.className} flex flex-col justify-end h-full tracking-widest`}
          >
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.4 }}
                // custom={index * 0.1}
                variants={nameVariants}
                className={`px-4 py-6 cursor-pointer  ${
                  selectedProject.id === project.id
                    ? "bg-slate-800 text-zinc-300 border-slate-800"
                    : "bg-transparent border-gray-600 border-opacity-45 hover:bg-slate-700 hover:bg-opacity-20"
                } ${index !== 0 && "border-t"} group flex justify-between`}
                onClick={() => setSelectedProject(project)}
              >
                <span
                  className={`${
                    selectedProject.id === project.id
                      ? "w-6 scale-150 opacity-100"
                      : "w-0 scale-0 opacity-0"
                  } flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-150 group-hover:w-6 group-hover:opacity-20`}
                >
                  <IoIosArrowBack />
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

const projects = [
  {
    id: 1,
    name: "Intervo",
    text: [
      "Developed a Interview Management System (IMS) to streamline the recruitment process for companies.",
      "Built a system accommodating various roles, including company administrators, interviewers, and candidates, to facilitate seamless testing and interview processes using the VideoSDK video conference library.",
      "Created visual dashboards for company administrators to monitor and understand the interview process using the Chart.js library.",
      "Developed proctoring algorithms for test supervision, incorporating face recognition, noise detection, and phone detection to ensure exam integrity.",
    ],
    stack: [
      "React",
      "Flask",
      "Tailwind",
      "Node.js ",
      "Express.js",
      "MongoDB",
      "Flask",
      "VideoSDK",
      "Chart.js",
      "JWT",
      "Proctoring Algorithms",
    ],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15733943/file/original-8841d7652d6f7fe323e08b64a61e9c3f.jpg?resize=320x240&vertical=center",
  },
  {
    id: 2,
    name: "Anukul",
    text: [
      "Developed a mental health platform offering resources, audio therapy, anonymous posts, MHI tests, and insightful blog articles to support user well-being.",
      "Designed and implemented an algorithm to process 38 user responses and generate scores across various scales of the Mental Health Inventory (MHI) test, ensuring accurate and reliable assessment results.",
      "Implemented functionality for creating anonymous posts with adjustable visibility levels to enhance user privacy.",
      "Integrated a feature allowing mental health consultants to interact with users via video calls, with payment handled through the Stripe Payment Gateway for seamless transactions.",
    ],
    stack: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Sentiment Analysis",
    ],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15712729/file/original-c855bfddb767d725619b03bd849f58aa.png?resize=320x240&vertical=center",
  },
  {
    id: 3,
    name: "CodeCampus",
    text: [
      "Designed and implemented a dynamic home dashboard featuring interactive video cards to enhance user engagement.",
      "Developed a video upload functionality, allowing users to contribute and share their own video content.",
      "Integrated a video playback system with like and dislike features, enabling users to express preferences and interact with content.",
      "Created a customizable playlist system, empowering users to organize and save their favorite videos for personalized viewing experiences.",
    ],
    stack: [
      "React",
      "Bootstrap",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "JWT",
    ],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15785690/file/still-21aa4d2295cfdb49d3604d16608aea61.png?resize=320x240&vertical=center",
  },
  {
    id: 4,
    name: "TestPoint",
    text: [
      "Developed a user and organizational home dashboard to provide a centralized overview of activities and resources.",
      "Implemented a test creation feature for organizations, enabling the efficient design and deployment of assessments.",
      "Built a system for users to attempt tests, facilitating seamless participation in assessments.",
      "Created a leaderboard feature to display user rankings based on test performance, fostering a competitive environment.",
      "Developed a functionality to display users' previous test results, providing insights into past performance.",
      "Implemented a password reset process via OTP, ensuring secure and user-friendly account recovery.",
    ],
    stack: [
      "EJS",
      "Bootstrap",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    imageUrl:
      "https://cdn.dribbble.com/userupload/15785690/file/still-21aa4d2295cfdb49d3604d16608aea61.png?resize=320x240&vertical=center",
  },
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
