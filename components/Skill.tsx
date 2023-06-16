import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  skillIcon: any;
  toolName: string;
  isInView: boolean;
};

export default function Skill({
  directionLeft,
  skillIcon,
  toolName,
  isInView,
}: Props) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      animate={isInView && { x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer skill-size"
    >
      <div className="[&>*]:skillIcon w-full h-full scale-90 group-hover:scale-110 transition-transform duration-300 ease-in-out ">
        {skillIcon}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-full h-full z-0 rounded-3xl scale-90 group-hover:scale-110 ">
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-base text-[100%] md:text-[125%] xl:text-[150%] font-bold text-black">
            {toolName}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
