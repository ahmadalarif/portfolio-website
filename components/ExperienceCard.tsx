import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FaGithub, FaReact, FaHtml5 } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { IoIosMore, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiRubyonrails,
  SiMongodb,
  SiJquery,
  SiMysql,
} from "react-icons/si";
import { DiRubyRough } from "@react-icons/all-files/di/DiRubyRough";
import {  FaNodeJs, FaGitAlt } from "react-icons/fa";


type Props = {}

function ExperienceCard({}: Props) {
  const { t } = useTranslation();
  return (
    <article className="w-screen h-[calc(100vh_-_13rem)] flex flex-col rounded-lg items-center flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 pt-4 space-y-4 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.25 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex space-x-2 sm:w-32 sm:h-32">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-fit"
            src="images/general-assembly-logo.png"
            alt=""
          />
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-fit"
            src="images/misk-academy-seeklogo.png"
            alt=""
          />
        </div>
      </motion.div>
      <div className="w-[80%] sm:w-[85%] space-y-2 h-[calc(65vh_-_6.5rem)] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <h4 className="text-xl sm:text-4xl font-light text-start">
          {t("experience.Experience posetion")}
        </h4>
        <div className="text-lg font-bold sm:text-2xl text-start">
          {t("experience.Experience company")}
        </div>
        <div className="flex space-x-2 my-2">
          <FaGitAlt className="h-14 w-14 rounded-full" color="#f14e32" />
          <FaGithub className="h-14 w-14 rounded-full" key={3} />
          <FaReact className="h-14 w-14 text-[#61DBFB] rounded-full" key={0} />
          {/* <SiNextdotjs
            color="black"
            className="h-14 w-14"
            fill="white"
            key={1}
          /> */}
          <FaHtml5
            className="bg-[#e34c26] h-14 w-14 rounded-full"
            fill="white"
            key={1}
          />
          <IoLogoCss3 className="bg h-14 w-14 rounded-full" color="#264de4" />
          <IoLogoJavascript
            className="bg-[#F0DB4F] h-14 w-14 rounded-full"
            color="#323330"
          />
          <SiRubyonrails color="#d30001" className=" h-14 w-14 rounded-full" />
          <DiRubyRough className=" h-14 w-14 rounded-full" color="#ba2121" />
          <FaNodeJs color="#43853d" className=" h-14 w-14 rounded-full" />
          <SiExpress
            color="#353535"
            className="bg-white h-14 w-14 rounded-full"
          />
          <SiMongodb
            color="#00ed64"
            className="bg-gray-700 h-14 w-14 rounded-full"
          />
          <SiMysql className=" h-14 w-14 rounded-full" />
          <SiJquery className=" h-14 w-14 rounded-full" color="#0092ef" />
          <AiOutlineApi className=" h-14 w-14 rounded-full" />
        </div>
        <div className="uppercase text-gray-400 text-start">
          {t("experience.Experience date")}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg text-start text-slate-200">
          <li>{t("experience.Experience description")}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard