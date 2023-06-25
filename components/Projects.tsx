import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  SiReact,
  SiPhp,
  SiCpanel,
  SiJquery,
  SiBootstrap,
  SiGatsby,
  SiContentful,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRuby,
  SiRubyonrails,
} from "react-icons/si";
import Project from "./Project";
import Image from "next/image";
import { useTranslation } from "next-i18next";

type Props = {};

export default function Projects({}: Props) {
  const { t } = useTranslation();
  let [index, setIndex] = useState(0);

  const projects = [
    {
      projectDemo: "https://fitness.yottaline.com",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/almacenter-image.webp"
          alt="fitness user interface"
          className="h-full w-full"
        />
      ),
      projectName: t("projectone"),
      projectDescription: t("projects.Project-1 description"),
      projectTools: [
        <SiPhp color="#8993be" key={0} />,
        <SiCpanel fill="#ff6c2c" key={1} />,
        <SiJquery fill="#0092ef" key={2} />,
        <SiBootstrap color="#712cf9" key={3} />,
      ],
    },
    {
      projectDemo: "https://fitness.yottaline.com/m_cpanel/",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/gym-admin-system-back-end-end.webp"
          alt="gym admin system"
          className="h-full w-full"
        />
      ),
      projectName: t("projecttwo"),
      projectDescription: t("projects.Project-2 description"),
      projectTools: [
        <SiPhp color="#8993be" key={0} />,
        <SiCpanel fill="#ff6c2c" key={1} />,
        <SiJquery fill="#0092ef" key={2} />,
        <SiBootstrap color="#712cf9" key={3} />,
      ],
    },

    {
      projectDemo: "https://awesome-varahamihira-16b9b2.netlify.app/",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/onlineMenu.webp"
          alt="online menu"
          className="h-full w-full"
        />
      ),
      projectName: t("projectthree"),
      projectDescription: t("projects.Project-3 description"),
      projectTools: [
        <SiReact color="#61DBFB" key={0} />,
        <SiGatsby fill="#764abc" key={1} />,
        <SiContentful key={2} />,
      ],
    },
    {
      projectDemo: "https://ahmadalarif.github.io/connect4/",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/connect-4.webp"
          alt="connect four game"
          className="h-full w-full"
        />
      ),
      projectName: t("projectfour"),
      projectDescription: t("projects.Project-4 description"),
      projectTools: [
        <SiHtml5 color="#e34c26" key={0} />,
        <SiCss3 color="#264de4" key={1} />,
        <SiJavascript color="#F0DB4F" key={3} />,
      ],
    },
    {
      projectDemo: "https://raedahfinance.onrender.com",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/readah.webp"
          alt="raedah"
          className="h-full w-full"
        />
      ),
      projectName: t("projectfive"),
      projectDescription: t("projects.Project-5 description"),
      projectTools: [
        <SiRuby color="#ba2121" key={0} />,
        <SiRubyonrails color="#d30001" key={1} />,
      ],
    },
  ];
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="relative h-screen overflow-hidden pt-20">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <h3 className="sectionHeading ">{t("projects.Projects title")}</h3>

            <motion.div
              animate={{ x: `-${index * 113}%` }}
              className="container z-20 flex flex h-[calc(100vh_-_8rem)] w-full justify-items-center text-center"
              dir="ltr"
            >
              {projects.map((project, i) => {
                return (
                  <Project
                    key={i}
                    projectNumber={i + 1}
                    numberOfProjects={projects.length}
                    projectDemo={project.projectDemo}
                    projectImage={project.projectImage}
                    projectName={project.projectName}
                    projectTools={project.projectTools}
                    projectDescription={project.projectDescription}
                  />
                );
              })}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white "
                  onClick={() => setIndex(index - 1)}
                >
                  <FaChevronLeft className="h-6 w-6 " fill="#F7AB0A" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < projects.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <FaChevronRight className="h-6 w-6" fill="#F7AB0A" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <div className="-skew-y-10 absolute top-[15%] left-0 h-[1vh] w-full bg-[#F7AB0A]/10"></div>
        </div>
      </div>
    </MotionConfig>
  );
}
