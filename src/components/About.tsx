import { BlurDiv } from "./ui/Blur";
import { DELAY } from "@/lib/constants";
import Markdown from "react-markdown";
export const About = ({ about }: { about: string }) => {
  return (
    <section id="about" className="my-8">
      <BlurDiv delay={DELAY * 1.45}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurDiv>
      <BlurDiv delay={DELAY * 1.55}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {about}
        </Markdown>
      </BlurDiv>
    </section>
  );
};
