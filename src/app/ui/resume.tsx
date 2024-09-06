import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";

interface ResumeProps {
  isResume: boolean;
  setIsResume: (value: boolean) => void;
}

export default function Resume({ isResume, setIsResume }: ResumeProps) {
  return (
    <div
      className={`${
        isResume ? "flex" : "hidden"
      } fixed inset-0 z-10 transition-all duration-200`}
    >
      <div className="absolute top-0 right-0 z-50 text-3xl p-2 md:p-5 flex gap-3">
        <a
          href="Resume.pdf"
          download="Aarav Dubey Resume.pdf"
          className="cursor-pointer hover:text-white"
        >
          <MdDownloadForOffline />
        </a>
        <button className="hover:text-white" onClick={() => setIsResume(false)}>
          <MdCancel />
        </button>
      </div>
      {/* Blurred Background */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Image that remains sharp */}
      <div className="h-full w-auto z-20">
        <Image
          src="/Resume.jpg"
          alt="Resume"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
