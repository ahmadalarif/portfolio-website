import React from "react";
import { motion } from "framer-motion";
import {  useTranslation } from "next-i18next";
type Props = {
 
};

export default function About({  }: Props) {
  const {t}= useTranslation();
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen pt-20 overflow-hidden"
    >
      <h3 className="sectionHeading ">{t("about.About title")}</h3>

      <div className="space-y-4 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
        >
          <motion.img
            width={500}
            height={600}
            src="images/ahmad-about.webp"
            alt="cringe picture of me"
            className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          />
        </motion.div>
        <div className="space-y-4  md:px-10 w-full px-4 overflow-y-auto h-[calc(100vh_-_26rem)] text-center md:text-left md:h-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
          <h4 className="text-2xl font-semibold text-start">
            {t("about.About subject")}
          </h4>
          <div className="text-xl text-start text-slate-300">
            {t("about.About description")}
          </div>
        </div>
      </div>
    </motion.article>
  );
}