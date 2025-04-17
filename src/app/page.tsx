"use client";
import { Introduction } from "@/components/introduction";
import { DATA } from "@/data/info";
import { About } from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { BlurDiv } from "@/components/ui/Blur";
import { DELAY } from "@/lib/constants";
export default function Home() {
  return (
    <main className="flex  flex-col min-h-[100dvh] mt-2 md:mt-16 scroll-smooth">
      <Introduction name={DATA.name} desc={DATA.shortDescription} />
      <About about={DATA.about} />
      <BlurDiv delay={DELAY * 1.88}>
        <Heading classname="text-7xl my-8">BLOGS</Heading>
      </BlurDiv>
      <Blogs showMore />
      <BlurDiv delay={DELAY * 1.99}>
        <Footer />
      </BlurDiv>
    </main>
  );
}
