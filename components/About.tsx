import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import {
  MdOutlineDeveloperMode,
  MdOutlineDesignServices,
} from "react-icons/md";
import { CgWebsite, CgCodeSlash } from "react-icons/cg";
import { FcEngineering } from "react-icons/fc";
type Props = {};

export default function About({}: Props) {
  const { t } = useTranslation();
  return (
    <motion.section
      className="h-full w-full bg-transparent  bg-gray-600 bg-[url('/images/ahmad-about.webp')] bg-fixed bg-center bg-no-repeat pt-4 bg-blend-multiply transition-opacity duration-200 hover:opacity-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="sectionHeading">{t("about.About title")}</h3>
      <div className="max-w-screen-xs mx-auto py-8 px-10 lg:py-16">
        <div className="mb-0 rounded-lg text-center dark:bg-transparent md:p-1">
          <h4 className="text-center text-2xl font-semibold">
            {t("about.About subject")}
          </h4>
          <p className="mb-1 text-lg font-normal text-slate-200 ">
            {t("about.About description")}
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5"
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
        >
          <div className="mb-2 mt-2 rounded-lg border border-gray-200 bg-gray-50  dark:border-gray-200 dark:bg-transparent md:p-10">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CgWebsite className=" h-10 w-10 text-blue-800 dark:text-blue-400" />
            </div>
            <h2 className="mb-1 text-center text-xl font-extrabold text-gray-900 dark:text-white">
              {t("about.Web Solutions")}
            </h2>
            <p className="mb-4 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
              {t("about.Web Solutions description")}
            </p>
          </div>
          <div className="mb-2 mt-2 rounded-lg border border-gray-200 bg-gray-50  dark:border-gray-200 dark:bg-transparent md:p-10">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FcEngineering className=" h-10 w-10 text-green-800 dark:text-green-400" />
            </div>
            <h2 className="mb-1 text-center text-xl font-extrabold text-gray-900 dark:text-white">
              {t("about.Application Development")}
            </h2>
            <p className="mb-4 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
              {t("about.Application Development description")}
            </p>
          </div>
          <div className="mb-2 mt-2 rounded-lg border border-gray-200 bg-gray-50  dark:border-gray-200 dark:bg-transparent md:p-10">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MdOutlineDesignServices className="h-10 w-10 align-middle text-red-800 dark:text-red-400" />
            </div>
            <h2 className="mb-1 text-center text-xl font-extrabold text-gray-900 dark:text-white">
              {t("about.UI/UX Design")}
            </h2>
            <p className="mb-4 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
              {t("about.UI/UX Design description")}
            </p>
          </div>
          <div className="mb-2 mt-2 rounded-lg border border-gray-200 bg-gray-50  dark:border-gray-200 dark:bg-transparent md:p-10">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CgCodeSlash className=" h-10 w-10 text-purple-800 dark:text-purple-400" />
            </div>
            <h2 className="mb-1 text-center text-xl font-extrabold text-gray-900 dark:text-white">
              {t("about.Startup Solutions")}
            </h2>
            <p className="mb-4 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
              {t("about.Startup Solutions description")}
            </p>
          </div>
          <div className="mb-2 mt-2 rounded-lg border border-gray-200 bg-gray-50  dark:border-gray-200 dark:bg-transparent md:p-10">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MdOutlineDeveloperMode className=" h-10 w-10 text-green-800 dark:text-green-400" />
            </div>
            <h2 className="mb-1 text-center text-xl font-extrabold text-gray-900 dark:text-white">
              {t("about.Mobile Apps")}
            </h2>
            <p className="mb-4 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
              {t("about.Mobile Apps description")}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
