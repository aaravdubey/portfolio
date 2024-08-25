"use client";

import Image from "next/image";
import { text, heading } from "./fonts";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { GlowCapture, Glow } from "@codaworks/react-glow";

export default function About() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <GlowCapture>
      <Glow>
        <motion.section
          id="about"
          className={`${text.className} flex w-full items-center py-36 md:text-xl px-5 sm:px-10 xl:px-36 tracking-wide`}
        >
          <motion.div
            style={{ opacity: scrollYProgress }}
            ref={element}
            className="w-full flex gap-10 justify-between items-center"
          >
            <div className="flex flex-col gap-8 text-zinc-300 text-sm sm:text-base md:text-lg xl:text-xl">
              <div className="flex items-center justify-between gap-5 h-min">
                <h1
                  className={`${heading.className} text-3xl md:text-5xl font-bold leading-[1.4] text-slate-300`}
                >
                  Hello! <br /> I&#39;m Aarav.
                  <div className="w-0 h-0 bg-transparent rounded-full shadow-[0_0_350px_200px_rgba(30,41,59,0.8)] bg-slate-800"></div>
                </h1>
                <div className="relative lg:hidden">
                  <Image
                    src="/photor.png"
                    className="brightness-90 saturate-[.35] contrast-150 bg-transparent rounded-lg"
                    alt="Picture of myself"
                    width={150}
                    height={150}
                  />
                  {/* <div className="absolute inset-0 fade"></div> */}
                </div>
              </div>
              <p>I&#39;m an MCA student at Christ University Bangalore.</p>
              <p>I&#39;m passionate about programming and web development.</p>
              <p>
                I&#39;m fluent in React.js, Next.js, and Node.js, and I love
                creating dynamic and responsive web applications.
              </p>
              <p>
                When I&#39;m not busy debugging (which is rare), I&#39;m always
                eager to learn new things and stay ahead in the ever-evolving
                world of web development.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/photor.png"
                className="brightness-90 saturate-[.4] contrast-150 bg-slate-700 rounded-t-3xl"
                alt="Picture of myself"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 fade"></div>
            </div>
          </motion.div>
        </motion.section>
      </Glow>
    </GlowCapture>
  );
}
