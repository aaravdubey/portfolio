import { text, heading } from "./fonts";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaExternalLinkAlt } from "react-icons/fa";
import StarsBg from "./stars";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Main() {
  const handleMailTo = () => {
    const email = "daarav101@gmail.com";
    const subject = "Hello Aarav!";
    const body = "Hey Aarav, I would like to connect with you!";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="image-container h-[35rem] lg:h-[50rem] flex flex-col justify-end bg-black relative text-zinc-400 ">
      <StarsBg />
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div> */}
      <header className="flex justify-between items-center w-full absolute top-5 px-5">
        <p
          className={`${heading.className} z-10 text-sm md:text-lg font-semibold tracking-widest text-reveal opacity-0 `}
          style={{ animationDelay: "0.6s" }}
        >
          / aaravdubey.dev
        </p>
      </header>
      {/* <Image
        src="https://images6.alphacoders.com/135/1350469.png"
        alt="Full View Image"
        layout="fill"
        priority={true}
        className="absolute inset-0 opacity-35 saturate-0 contrast-125 brightness-[.45] object-cover w-full h-full fade-in"
      /> */}
      <div className="absolute inset-0 vignette fade"></div>
      <div
        className={`${heading.className} self-end flex-1 w-fit absolute text-center top-5 gap-5 px-5 z-10`}
      >
        <div className="flex flex-col-reverse md:flex-col items-end gap-2">
          <div className="flex flex-col-reverse md:flex-row gap-2 items-end">
            <a
              href="https://github.com/aaravdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit p-2 bg-slate-500 rounded-full bg-opacity-20 backdrop-blur-md hover:backdrop-blur-lg hover:bg-opacity-30"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aaravdubey/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit p-2 bg-slate-500 rounded-full bg-opacity-20 backdrop-blur-md hover:backdrop-blur-lg hover:bg-opacity-30"
            >
              <FaLinkedin />
            </a>
            <button
              onClick={handleMailTo}
              className="h-fit py-1 px-2 md:px-4 bg-slate-500 rounded-lg bg-opacity-20 backdrop-blur-md hover:backdrop-blur-lg hover:bg-opacity-30"
            >
              Say Hello
            </button>
            <a
              href="Resume.pdf"
              download="Aarav Dubey Resume.pdf"
              className="h-fit py-1 px-2 md:px-4 bg-slate-500 rounded-lg bg-opacity-20 backdrop-blur-md hover:backdrop-blur-lg hover:bg-opacity-30"
            >
              Resume
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              style={{ animationDelay: "0.4s" }}
              className="h-fit w-36 text-sm md:text-base group flex justify-end text-reveal opacity-0 items-center"
            >
              About{"  "}
              <span className="flex w-0 items-center justify-center transform scale-0 opacity-100 transition-all duration-200 ease-in group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
                &#8594;
              </span>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              style={{ animationDelay: "0.4s" }}
              className="h-fit w-36 text-sm md:text-base group flex justify-end text-reveal opacity-0 break-inside-avoid-column"
            >
              Skills{"  "}
              <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
                &#8594;
              </span>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
              style={{ animationDelay: "0.4s" }}
              className="h-fit w-36 text-sm md:text-base group flex justify-end text-reveal opacity-0 break-inside-avoid-column"
            >
              Projects{"  "}
              <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
                &#8594;
              </span>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
              style={{ animationDelay: "0.4s" }}
              className="h-fit w-36 text-sm md:text-base group flex justify-end text-reveal opacity-0 break-inside-avoid-column"
            >
              Experience{"  "}
              <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
                &#8594;
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div
        className={`${heading.className} flex md:hidden w-full text-[4.5rem] sm:text-[5rem] relative text-center flex-col leading-[1] tracking-wide px-5 my-10 gradient-text`}
      >
        <p className="text-left">AARAV</p>
        <p className="text-left">DUBEY</p>
      </div> */}

      <div
        className={`${heading.className} flex w-full text-[20vw] lg:text-[14rem] relative text-center flex-col leading-[1] tracking-wide px-5 my-10`}
      >
        {/* <ScreenFitText /> */}
        <h1 className="flex w-full justify-between ">
          <span className="flex flex-col">
            <span
              className="text-reveal gradient-text opacity-0 "
              style={{ animationDelay: "0.2s" }}
            >
              A
            </span>
            <span className="text-reveal gradient-text">D</span>
          </span>
          <span className="flex flex-col">
            <span
              className="text-reveal gradient-text opacity-0 "
              style={{ animationDelay: "0.2s" }}
            >
              A
            </span>
            <span className="text-reveal gradient-text">U</span>
          </span>
          <span className="flex flex-col">
            <span
              className="text-reveal gradient-text opacity-0 "
              style={{ animationDelay: "0.2s" }}
            >
              R
            </span>
            <span className="text-reveal gradient-text">B</span>
          </span>
          <span className="flex flex-col">
            <span
              className="text-reveal gradient-text opacity-0 "
              style={{ animationDelay: "0.2s" }}
            >
              A
            </span>
            <span className="text-reveal gradient-text">E</span>
          </span>
          <span className="flex flex-col">
            <span
              className="text-reveal gradient-text opacity-0 "
              style={{ animationDelay: "0.2s" }}
            >
              V
            </span>
            <span className="text-reveal gradient-text">Y</span>
          </span>
        </h1>
      </div>
    </main>
  );
}
