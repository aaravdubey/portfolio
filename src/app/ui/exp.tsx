import { text, heading } from "./fonts";
import { LuExternalLink } from "react-icons/lu";
import { BiSolidUpArrow, BiSolidUpsideDown } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { Variants, motion } from "framer-motion";

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
const cardVariants2: Variants = {
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

export default function Exp() {
  return (
    <div
      id="experience"
      className="flex flex-col-reverse md:flex-row-reverse px-5 sm:px-10 xl:px-36 pt-14 pb-10 gap-14"
    >
      <div className="w-full flex flex-col justify-end">
        <h1
          className={`${heading.className} text-3xl md:text-4xl font-bold text-slate-300 tracking-wider pb-2 flex relative gap-2 justify-end items-center`}
        >
          <BiSolidDownArrow className="text-slate-300 inline" />
          EDUCATION
        </h1>

        <div className="flex flex-col-reverse">
          <div className="w-0 h-0 bg-transparent rounded-full shadow-[0_0_350px_200px_rgba(30,41,59,0.4)] bg-slate-800"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 bg-opacity-20 backdrop-blur-lg border border-white/10 rounded-lg p-6 mt-8"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              // custom={index * 0.1}
              variants={cardVariants}
            >
              <div className="flex justify-between items-center gap-5 text-base md:text-lg">
                <h2 className="font-semibold">{edu.title}</h2>
                <p className="font-semibold text-slate-400">{edu.percentage}</p>
              </div>
              <p className="mt-2 text-zinc-400 text-xs md:text-sm">
                {edu.university}
              </p>
              <p className="mt-2 text-zinc-400 text-xs md:text-sm">
                {edu.place}
              </p>
              <p className="mt-2 text-zinc-400 text-xs md:text-sm">
                {edu.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h1
          className={`${heading.className} text-3xl md:text-4xl font-bold text-slate-300 tracking-wider mb-10 relative flex gap-2 items-center`}
        >
          EXPERIENCE
          <BiSolidDownArrow className="text-slate-300 inline" />
        </h1>

        <div className="flex flex-col-reverse gap-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 bg-opacity-20 backdrop-blur-lg border border-white/10 rounded-lg p-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.5 }}
              // custom={index * 0.1}
              variants={cardVariants2}
            >
              <div className="flex justify-between items-center gap-5">
                <h2 className="text-lg md:text-xl font-semibold">
                  {exp.title}
                </h2>
                <a className="font-semibold text-lg text-slate-400 p-2 rounded-full hover:bg-slate-400 hover:bg-opacity-10">
                  <LuExternalLink />
                </a>
              </div>
              <p className="mt-2 text-slate-300 text-xs md:text-sm">
                {exp.university}
              </p>
              <div className="mt-2">
                {exp.tasks && (
                  <ul className="list-disc list-none">
                    {exp.tasks.map((task) => (
                      <li
                        key={index}
                        className="text-zinc-400 text-xs md:text-sm mt-1"
                      >
                        - {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className=" text-zinc-400 text-xs md:text-sm">{exp.place}</p>
                <p className=" text-zinc-400 text-xs md:text-sm">
                  {exp.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    percentage: "91.50%",
    university: "MIT World Peace University",
    place: "Pune, Maharashtra",
    duration: "2021 - 2023",
  },
  {
    title: "Master of Computer Applications (MCA)",
    percentage: "76.28%*",
    university: "Christ (Deemed to be University)",
    place: "Bengaluru, Karnataka",
    duration: "2023 - 2025",
  },
];

const experience = [
  {
    title: "Junior software developemnt intern",
    percentage: "91.50%",
    university: "HACK-X Security",
    tasks: [
      "Built a web application called Hack-X Node using the MERN stack to deliver the services of automated penetration testing to clients",
      "Developed UIs & dashboards using React.js, SCSS, & Chart.js",
      "Implemented a secure login system with JWT authentication & Cookies",
      "Developed a RESTful API for CRUD operations using Node.js, Express.js & MongoDB",
    ],
    place: "Pune, Maharashtra",
    duration: "Apr 2023 - Jun 2023",
  },
  {
    title: "Junior web developemnt intern",
    percentage: "76.28%*",
    university: "ICIER",
    tasks: [
      "Contributed to the development of a university event booking management web application for a startup named Orenge under the guidance of ICIER, using the MERN stack",
      `Used Tailwind CSS & ${(
        <span className="text-gray-50">Chart.js</span>
      )}  for the frontend, Node.js & Express.js for the backend, and MongoDB for the database`,
    ],
    place: "Bengaluru, Karnataka",
    duration: "May 2024 - Jun 2024",
  },
];
