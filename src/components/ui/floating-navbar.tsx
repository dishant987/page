"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-1 max-w-fit min-w-[1370px] min-h-[80px] mx-auto border border-transparent dark:border-white/[0.2] rounded-3xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 justify-between items-center space-x-4",
          className
        )}
      >
        <div>
          <h1 className=" text-3xl">Navbar</h1>
        </div>
        <div className=" flex flex-row gap-[40px] items-center ">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-lg">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className=" flex gap-[20px] p-4">
        <Button className="bg-[#F9F5FF] shadow-sm border text-[#7F6EFC] w-full hover:bg-[#edebff]">
            Login
          </Button>
          <Button className="bg-[#7F6EFC] shadow-sm border w-full hover:bg-[#9487f8]">
            Sign up
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
