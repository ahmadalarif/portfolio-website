import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Skill from "./Skill";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  IoIosMore,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiExpress,
  SiRubyonrails,
  SiElectron,
  SiMongodb,
  SiJquery,
  SiCanva,
  SiGatsby,
  SiMysql,
  SiCpanel,
  SiBootstrap,
  SiTailwindcss,
  SiContentful,
} from "react-icons/si";
import { DiRubyRough } from "@react-icons/all-files/di/DiRubyRough";
import {  FaNodeJs, FaGitAlt } from "react-icons/fa";
import { useTranslation } from "next-i18next";

type Props = {};

export default function Skills({}: Props) {
  const skillsRef = useRef(null);
  const skillsIsInView = useInView(skillsRef, { once: true });

  const skills = [
    {
      toolName: "HTML5",
      skillIcon: <AiFillHtml5 className="bg-[#e34c26]" />,
    },
    {
      toolName: "CSS3",
      skillIcon: <IoLogoCss3 className="bg-white" color="#264de4" />,
    },
    {
      toolName: "JS",
      skillIcon: <IoLogoJavascript className="bg-[#F0DB4F]" color="#323330" />,
    },
    {
      toolName: "Ruby",
      skillIcon: <DiRubyRough className="bg-white" color="#ba2121" />,
    },
    {
      toolName: "Rails",
      skillIcon: <SiRubyonrails className="bg-white" color="#d30001" />,
    },
    {
      toolName: "React",
      skillIcon: <SiReact color="#61DBFB" />,
    },
    {
      toolName: "Gatsby",
      skillIcon: <SiGatsby fill="#764abc" key={1} />,
    },
    {
      toolName: "Next.js",
      skillIcon: <SiNextdotjs color="black" className="bg-white" />,
    },
    {
      toolName: "TS",
      skillIcon: <SiTypescript className="bg-white" color="#007acc" />,
    },
    {
      toolName: "PHP",
      skillIcon: <SiPhp color="#8993be" />,
    },
    {
      toolName: "Bootstrap",
      skillIcon: <SiBootstrap color="#59287a" />,
    },
    {
      toolName: "Tailwindcss",
      skillIcon: <SiTailwindcss color="#0ea5e9" />,
    },
    {
      toolName: "Contentful",
      skillIcon: (
        <SiContentful color="#3ab2e6" colorInterpolation="#ffd75e" className="bg-#f05a65" />
      ),
    },
    {
      toolName: "ElectronJs",
      skillIcon: <SiElectron fill="#9feaf9" className="bg-#7f8497" />,
    },
    {
      toolName: "NodeJs",
      skillIcon: <FaNodeJs color="#43853d" className="bg-white" />,
    },
    {
      toolName: "Express",
      skillIcon: <SiExpress color="#353535" className="bg-white" />,
    },
    {
      toolName: "Mongodb",
      skillIcon: <SiMongodb color="#00ed64" />,
    },

    {
      toolName: "SQL",
      skillIcon: <SiMysql className=" h-14 w-14 rounded-full" />,
    },
    {
      toolName: "cPannel",
      skillIcon: (
        <SiCpanel className=" h-14 w-14 rounded-full" color="#FF6C2C" />
      ),
    },
    {
      toolName: "jQuery",
      skillIcon: <SiJquery color="#0092ef" />,
    },

    {
      toolName: "Canva",
      skillIcon: <SiCanva color="#7300e6" />,
    },

    {
      toolName: "GitHub",
      skillIcon: <AiFillGithub className="bg-white" fill="black" />,
    },

    {
      toolName: "Git",
      skillIcon: <FaGitAlt color="#f14e32" />,
    },

    {
      toolName: "and more!",
      skillIcon: <IoIosMore />,
    },
  ];
  const animationDirection = (i: number) => {
    return i >= 8 ? true : false;
  };
  const { t }= useTranslation();
  return (
    <article className="h-screen pt-2 overflow-visible mt-1 " ref={skillsRef}>
      <h3 className="sectionHeading mt-1">{t("skills.Skills title")}</h3>
      <div className="flex items-center justify-center h-[calc(100vh_-_7rem)] z-20">
        <div className="grid grid-cols-4 gap-3 sm:gap-2">
          {skills.map((skill, i) => {
            return (
              <Skill
                key={i}
                skillIcon={skill.skillIcon}
                toolName={skill.toolName}
                directionLeft={animationDirection(i)}
                isInView={skillsIsInView}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
