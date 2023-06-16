import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "next-i18next";

type Props = {};

export default function Header({}: Props) {
  //note this is not a good way to do this but due to the low amount of items and time constraint, it is fine for now
  const [whatIsHovered, setWhatIsHovered] = useState(-1);
  const handleMouseEnter = (target: any) => {
    setWhatIsHovered(target);
  };
  const handleMouseExit = () => {
    setWhatIsHovered(-1);
    
  };
    const { t } = useTranslation();
  return (
    <header className="sticky top-0 p-3 sm:p-5 flex items-center justify-between mx-auto max-w-7xl text-white z-10">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center transition-colors duration-1000"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/ahmadalarif"
          target="_blank"
          fgColor={`${whatIsHovered === 0 ? "#F7AB0A" : "gray"}`}
          bgColor="transparent"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseExit()}
        />
        <SocialIcon
          url="https://github.com/ahmadalarif"
          target="_blank"
          fgColor={`${whatIsHovered === 1 ? "#F7AB0A" : "gray"}`}
          bgColor="transparent"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseExit()}
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2 "
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseExit()}
        >
          <FiMail
            className={`cursor-pointer bg-transparent text-2xl m-2 ${
              whatIsHovered === 3 ? "text-[#F7AB0A]" : "text-gray-400"
            }`}
          />
          <div
            className={`hidden sm:inline-flex text-sm uppercase ${
              whatIsHovered === 3 && "text-[#F7AB0A]"
            }`}
          >
            {t("contact.Contact me")}
          </div>
          {"  "}
        </motion.div>
      </Link>
    </header>
  );
}
