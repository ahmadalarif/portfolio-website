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
      className="z-20 flex h-full w-screen flex-shrink-0 snap-center  flex-col items-center justify-start space-y-5 sm:px-20 md:px-40"
    >
      <motion.a
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        target="_blank"
        href={projectDemo}
        rel="noopener noreferrer"
        className="group flex max-w-[80vw] items-center justify-center "
      >
        <motion.div className="h-[30vh] md:h-[40vh] xl:h-[50vh] ">
          {projectImage}
        </motion.div>
        <h3 className=" absolute scale-0 whitespace-nowrap rounded-full border border-gray-300 bg-gray-500 bg-opacity-30 p-4 text-center text-3xl duration-200 group-hover:scale-100 ">
          {t("projects.Project link")}
        </h3>
      </motion.a>
      <h4 className="text-center text-xl font-semibold sm:text-4xl" >
        <span className="underline decoration-[#FFE55C]/50">
          {t("projects.Project number")} {projectNumber}{" "}
          {t("projects.Project of")} {numberOfProjects}:
        </span>{" "}
        {projectName}
      </h4>
      <div className="projectTools flex items-center space-x-4 mb-20">
        {projectTools}
      </div>
      <div className="max-w-[80vw] overflow-scroll text-lg scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projectDescription}
      </div>
    </motion.div>
  );
}
