import Animation from "./loading.json";
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie
        animationData={Animation}
        loop={true}
        style={{ width: "30%", height: "auto" }}
      />
    </div>
  );
}
