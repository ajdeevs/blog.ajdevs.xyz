import { ModeToggle } from "@/components/theme-toggle";
import {
  IconBook,
  IconBrandGithub,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import React from "react";

export type dataProps = {
  name: string;
  image: string;
  twitterLink: string;
  shortDescription: string;
  githubUsername: string;
  about: string;
  navbar: {
    socials: {
      name: string;
      link: string;
      icon: React.ReactNode;
    }[];
    utils: React.ReactNode[];
  };
};

export const DATA: dataProps = {
  name: "ajdevs",
  image: "/ajdevs.jpeg",
  twitterLink: "https://x.com/ajdeevs",
  shortDescription:
    "Student Turned Software Engineer. I have a love for designs and building products. I like to code in 0's & 1's",
  githubUsername: "ajdeevs",
  about:
    "At the end of 2023, I tried to change my life by learning to ACTUALLY code and I have been coding ever since, I have a nick for building cool looking designs and core backend systems. You can find me on X [@ajdeevs](https://x.com/ajdeevs) and on github [@ajdeevs](https://github.com/ajdeevs). I also happen to write and share sometimes and below are some of my blogs.",
  navbar: {
    socials: [
      {
        name: "Home",
        link: "https://blog.ajdevs.xyz",
        icon: <IconHome className="text-neutral-500 dark:text-neutral-300" />,
      },
      {
        name: "Twitter",
        link: "https://x.com/ajdeevs",
        icon: <IconBrandX className="text-neutral-500 dark:text-neutral-300" />,
      },
      {
        name: "GitHub",
        link: "https://github.com/ajdeevs",
        icon: (
          <IconBrandGithub className="text-neutral-500 dark:text-neutral-300" />
        ),
      },
      {
        name: "Blogs",
        link: "/blog",
        icon: <IconBook className="text-neutral-500 dark:text-neutral-300" />,
      },
    ],
    utils: [<ModeToggle key="mode-toggle" />],
  },
};
