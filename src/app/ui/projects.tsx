import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { text, heading } from "./fonts";

export default function Projects() {
  return (
    <div className="bg-slate-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] gradient-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <h1
            className={`${heading.className} text-5xl font-bold leading-[1.5] flex justify-center items-center w-96`}
          >
            My <br /> Projects <br /> {"</>"}
          </h1>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[900px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 saturate-[.5]"
      ></div>

      {/* Gradient Background */}
      <div className="absolute inset-x-0 right-0 z-10 h-full bg-gradient-to-l from-black to-transpare flex transition ease-in-out duration-100 flex-col text-right items-end p-10 gap-5">
        <p className="text-4xl font-bold uppercase text-white">{card.title}</p>
        <p className="w-[40%]">
          {card.text}
        </p>
        <div className="flex gap-2">
          {card.stack.map((stack) => {
            return (
              <span
                key={stack}
                className="bg-zinc-700 rounded-3xl px-2 py-1 text-sm"
              >
                {stack}
              </span>
            )})
          }
          {/* // <span className="bg-zinc-700 rounded-3xl px-2 py-1 text-sm">
          //   react
          // </span> */}
        </div>
      </div>

      {/* Text */}
      {/* <div className="absolute inset-x-0 bottom-0 z-20 p-8"></div> */}
    </div>
  );
};

const cards = [
  {
    url: "https://cdn.dribbble.com/userupload/16011562/file/original-b3962c825f31d8f59a286e836ef96276.png?resize=400x300&vertical=center",
    title: "Title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    id: 1,
  },
  {
    url: "https://cdn.dribbble.com/userupload/16018061/file/still-1d8c506b8c316378351a17a56537a03f.png?resize=400x300&vertical=center",
    title: "Title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    id: 2,
  },
  {
    url: "https://cdn.dribbble.com/userupload/16013637/file/original-9b8c27ceee07721a4ec6afdb3c73c04c.jpg?resize=400x300&vertical=center",
    title: "Title 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    id: 3,
  },
  {
    url: "https://cdn.dribbble.com/userupload/16016628/file/original-7f66b5b0a139cff35051aeaaaca7e701.png?crop=0x0-1600x1200&resize=400x300&vertical=center",
    title: "Title 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    id: 4,
  },
  {
    url: "https://cdn.dribbble.com/userupload/16019939/file/original-18aed18dea020271cfc4816a9a20b2ea.png?resize=400x300&vertical=center",
    title: "Title 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["React", "Tailwind", "Framer Motion"],
    id: 5,
  },
];
