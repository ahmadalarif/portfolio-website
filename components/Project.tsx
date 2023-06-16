import { motion } from "framer-motion";
import React from "react";
import {  useTranslation } from "next-i18next";




type Props = {
  projectDemo: string;
  projectImage: any;
  projectNumber: number;
  numberOfProjects: number;
  projectName: string;
  projectTools: any;
  projectDescription: string;
};

export default function Project({
  projectDemo,
  projectImage,
  projectNumber,
  numberOfProjects,
  projectName,
  projectTools,
  projectDescription,
}: Props) {

  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4  items-center justify-start sm:px-20 md:px-44 h-full z-20 "
    >
      <motion.a
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        target="_blank"
        href={projectDemo}
        rel="noopener noreferrer"
        className="group flex items-center justify-center max-w-[80vw] "
      >
        <motion.div className="h-[30vh] md:h-[40vh] xl:h-[50vh] ">
          {projectImage}
        </motion.div>
        <h3 className=" absolute scale-0 group-hover:scale-100 p-4 border border-gray-300 rounded-full bg-gray-500 bg-opacity-30 text-3xl duration-200 text-center whitespace-nowrap ">
          {t("projects.Project link")}
        </h3>
      </motion.a>
      <h4 className="text-xl sm:text-4xl font-semibold text-center">
        <span className="underline decoration-[#FFE55C]/50">
          {t("projects.Project number")} {projectNumber}{" "}
          {t("projects.Project of")} {numberOfProjects}:
        </span>{" "}
        {projectName}
      </h4>
      <div className="flex items-center space-x-4 projectTools ">
        {projectTools}
      </div>
      <div className="text-lg text-center md:text-start">
        {projectDescription}
      </div>
    </motion.div>
  );
}
