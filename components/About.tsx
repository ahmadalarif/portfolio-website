import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
type Props = {};

export default function About({}: Props) {
  const { t } =  useTranslation();
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen overflow-hidden pt-20"
    >
      <h3 className="sectionHeading ">{t("about.About title")}</h3>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center space-y-4 px-10 text-center md:flex-row md:text-left">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
        >
          <Image
            width={500}
            height={600}
            src="/images/ahmad-about.webp"
            alt="cringe picture of me"
            className="h-56 w-56 rounded-full object-cover md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px] aboutImage"
          />
        </motion.div>
        <div className="h-[calc(100vh_-_26rem)]  w-full space-y-4 overflow-y-auto px-4 text-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:h-auto md:px-10 md:text-left ">
          <h4 className="text-4xl font-semibold">{t("about.About subject")}</h4>
          <p className="text-base">
            I&apos;m{" "}
            <span className="name-hover cursor-pointer underline decoration-[#FFE55C]/50">
              Ahmad
            </span>{" "}
            <span className="phonetic-name text-[#F7AB0A]">
              {" "}
              &nbsp; &#40;Pronounced &quot;A7-mad&quot;&#41;
            </span>
            {t("about.About description")}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
