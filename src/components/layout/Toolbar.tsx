"use client";

import { Separator } from "@/components/ui/separator";
import { useDimensions } from "@/hooks/use-dimensions";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    display: "block",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 5px 5px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const screenBlur = {
  open: (height = 1000) => ({ opacity: "1", display: "block" }),
  closed: { opacity: "0" },
};

export default function Toolbar() {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={menuActive ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="w-full h-32 flex justify-between items-center">
        <Menu
          className={cn("w-12 h-12 ml-5 z-20", {
            "rotate-90": menuActive,
          })}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        />
        <h1 className="font-extrabold text-[32px] uppercase">
          <Link href="/">Klasseverktøy!</Link>
        </h1>
        <div className="w-7 h-32 bg-green-300" />
      </div>
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-[347px] z-10 bg-slate-300 hidden"
        variants={sidebar}
      />
      <motion.div
        id="menu-blur"
        className="absolute top-0 left-0 bottom-0 w-screen blur-2xl bg-white hidden"
        variants={screenBlur}
      ></motion.div>
      <Separator className="h-1" />
    </motion.nav>
  );
}
