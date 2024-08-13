import { text, heading } from "./fonts";

export default function Main() {
  return (
    <main className="flex h-svh flex-col justify-end bg-black relative text-zinc-300">
      {/* <header className="flex justify-between items-center w-full absolute top-5 px-5">
  <p
    className={`${heading.className} z-10 text-lg font-semibold tracking-widest text-reveal opacity-0 `}
    style={{ animationDelay: "0.4s" }}
  >
    aaravdubey.dev
  </p>
</header> */}
      <img
        src="https://images6.alphacoders.com/135/1350469.png"
        alt="Retro background"
        className="absolute inset-0 opacity-35 saturate-[.1] brightness-[.55] object-cover w-full h-full fade-in"
      />
      <div className="absolute inset-0 vignette fade"></div>
      <div className="`${heading.className} w-full text-[14rem] relative text-center flex flex-col leading-[1] tracking-wide px-5 overflow-hidden`">
        <button
          // href="#about"
          onClick={() => scrollToSection("about")}
          style={{ animationDelay: "0.4s" }}
          className="text-lg mb-10 self-end group flex text-reveal opacity-0 items-center"
        >
          About{"  "}
          <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
            &#8594;
          </span>
        </button>
        <button
          style={{ animationDelay: "0.4s" }}
          className="text-lg mb-10 self-end group flex text-reveal opacity-0"
        >
          Skills{"  "}
          <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
            &#8594;
          </span>
        </button>
        <button
          style={{ animationDelay: "0.4s" }}
          className="text-lg mb-10 self-end group flex text-reveal opacity-0"
        >
          Projects{"  "}
          <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
            &#8594;
          </span>
        </button>
        <button
          style={{ animationDelay: "0.4s" }}
          className="text-lg mb-10 self-end group flex text-reveal opacity-0"
        >
          Resume{"  "}
          <span className="flex w-0 items-center justify-center transform scale-0 opacity-0 transition-all duration-200 ease-in group-hover:scale-100 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
            &#8594;
          </span>
        </button>
      </div>

      <div
        className={`${heading.className} w-full text-[14rem] relative text-center flex flex-col leading-[1] tracking-wide px-5`}
      >
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
