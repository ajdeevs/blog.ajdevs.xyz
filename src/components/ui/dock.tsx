"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { dataProps } from "@/data/info";
import Link from "next/link";

export interface DockProps {
  mobileClassName?: string;
  DesktopClassName?: string;
  navbar: dataProps["navbar"];
}

const Dock: React.FC<DockProps> = ({
  DesktopClassName,
  navbar,
  mobileClassName,
}) => {
  return (
    <>
      <DockMobile navbar={navbar} mobileClassName={mobileClassName} />
      <DockDesktop navbar={navbar} DesktopClassName={DesktopClassName} />
    </>
  );
};

const DockMobile = ({ mobileClassName, navbar }: DockProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden  fixed  bottom-3 right-5 z-90 mx-auto  origin-bottom h-full max-h-14">
      <AnimatePresence>
        {open && (
          <motion.div className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2 items-center z-50">
            {navbar.socials.map((social, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.06 },
                }}
                transition={{
                  delay: (navbar.socials.length - 1 - idx) * 0.05,
                }}
              >
                <DockIcon
                  key={idx}
                  link={social.link}
                  icon={social.icon}
                  className="h-10 w-10 cursor-pointer rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "z-50 flex gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4",
          mobileClassName
        )}
      >
        <motion.span
          initial={{ rotate: 0 }}
          animate={open ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          🎒
        </motion.span>
      </div>
    </div>
  );
};
DockMobile.displayName = "DockMobile";

const DockDesktop = ({ DesktopClassName, navbar }: DockProps) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const iconWidth = 40;
  const utilsWidth = 50;
  const totalIcons =
    navbar.socials.length * iconWidth + navbar.utils.length * utilsWidth + 35;
  const handleMouseEnter = () => {
    setIsBlurred(true);
    setIsHovered(true);
    setTimeout(() => {
      setIsBlurred(false);
    }, 300);
  };
  const handleMouseLeave = () => {
    setIsBlurred(true);
    setIsHovered(false);
    setTimeout(() => {
      setIsBlurred(false);
    }, 100);
  };
  return (
    <div className="hidden pointer-events-auto fixed inset-x-0 top-5 z-30 mx-auto mb-4 md:flex origin-bottom h-full max-h-14">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ width: `${totalIcons}px` }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 10,
          }}
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
          animate={{ scale: 1.1 }}
          className={cn(
            "flex gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4",
            isBlurred && "blur-sm",
            DesktopClassName
          )}
        >
          <span className={cn(!isHovered ? "visible" : "hidden")}>🎒</span>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 10,
                delay: 0.2,
              }}
              className="flex gap-5 justify-center items-center"
            >
              {navbar.socials.map((social, idx) => (
                <DockIcon key={idx} {...social} />
              ))}
              <div className="border-l-[1px] border-solid dark:border-muted-foreground">
                {navbar.utils.map((util, idx) => (
                  <DockUtil key={idx} util={util} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

type DockUtilProps = {
  util: React.ReactNode;
  className?: string;
};

const DockUtil = ({ util, className }: DockUtilProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={cn(className)}>
      {util}
    </motion.div>
  );
};

type DockIconProps = {
  link?: string;
  icon: React.ReactNode;
  className?: string;
};
const DockIcon = ({ link, icon, className }: DockIconProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={cn(className)}>
      <Link href={link!}>{icon}</Link>
    </motion.div>
  );
};
export { Dock };
