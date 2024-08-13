import Image from "next/image";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Image
        src="/photo.jpg"
        className="rounded-full saturate-0 contrast-150"
        alt="Picture of myself"
        width={500}
        height={500}
      />
    </>
  );
}
