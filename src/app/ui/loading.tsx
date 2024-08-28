import { text, heading } from "./fonts";

export default function Loading() {
  return (
    <div className="flex items-center gap-3 p-10">
      <div className="pulse-shadow"></div>
      {/* <div className="loader"></div> */}
      <span
        className={`${heading.className} text-gray-100 text-2xl tracking-widest`}
      >
        loading...
      </span>
    </div>
  );
}
