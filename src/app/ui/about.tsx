"use client";

import Image from "next/image";
import { text, heading } from "./fonts";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function About() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.section
      id="about"
      className={`${text.className} h-svh flex justify-center items-center text-xl px-36 tracking-wide`}
    >
      <motion.div
        style={{ opacity: scrollYProgress }}
        ref={element}
        className="flex gap-10 justify-center items-center"
      >
        <div className="w-2/3 flex flex-col gap-8 text-zinc-300 saturate-0">
          <h1
            className={`${heading.className} text-5xl font-bold leading-[1.4]`}
          >
            Hello! <br /> I'm Aarav.
          </h1>
          <p>I'm an MCA student at Christ University Bangalore.</p>
          <p>I'm passionate about programming and web development.</p>
          <p>
            I'm fluent in React.js, Next.js, and Node.js, and I love creating
            dynamic and responsive web applications.
          </p>
          <p>
            When I'm not busy debugging (which is rare), I'm always eager to
            learn new things and stay ahead in the ever-evolving world of web
            development.
          </p>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/photo.png"
            className="brightness-95 saturate-[.2] contrast-150"
            alt="Picture of myself"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 fade"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}
