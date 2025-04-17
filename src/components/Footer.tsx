import Link from "next/link";
import { Heading } from "./Heading";
import { DATA } from "@/data/info";
export const Footer = () => {
  return (
    <div className=" text-white min-h-[300px] flex flex-col items-center justify-center px-4  text-center">
      <Link
        href="mailto:bhawnaniankit@gmail.com"
        className="inline-block bg-gray-300 dark:bg-gray-700 text-foreground px-3 py-1 rounded-full text-sm font-medium mb-6 cursor-pointer"
      >
        <span className="text-foreground ">Contact</span>
      </Link>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Get in Touch
      </h2>
      <p className="max-w-2xl text-gray-400 text-lg">
        Want to chat? Just shoot me a dm{" "}
        <Link href={DATA.twitterLink}>on twitter</Link>
      </p>
      <Heading classname=" my-8">AJDEVS.XYZ</Heading>
    </div>
  );
};
