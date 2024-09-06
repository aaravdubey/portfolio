interface LoadingProps {
  isFading: boolean;
}

export default function Loading({ isFading }: LoadingProps) {
  return (
    <div
      className={`h-screen w-screen flex gap-3 p-10 transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="pulse-shadow"></div>
      <span className="text-gray-100 text-2xl tracking-widest">loading...</span>
    </div>
  );
}
