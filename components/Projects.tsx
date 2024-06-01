import {
  SiRuby,
  SiRubyonrails,
  SiPhp,
  SiBootstrap,
  SiCpanel,
  SiGatsby,
  SiContentful,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import Project from "./Project";
import Image from "next/image";
import { useTranslation } from "next-i18next";

type Props = {};

export default function Projects({}: Props) {
  const { t } = useTranslation();
  const projects = [
    {
      projectDemo: "https://gymadmin-c0fe9b04e8a8.herokuapp.com/",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/alma-centers.webp"
          alt="gymadmin-frontend"
          className="h-full w-full"
        />
      ),
      projectName: t("projectone"),
      projectDescription: t("projects.Project-1 description"),
      projectTools: [
        <SiPhp color="#61DBFB" key={0} />,
        <SiBootstrap fill="#764abc" key={1} />,
        <SiCpanel color="#ff6c28" key={2} />,
      ],
    },
    {
      projectDemo: "https://gymadmin-c0fe9b04e8a8.herokuapp.com/m_cpanel/",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/gym-admin-system-back-end-end.webp"
          alt="sorting project"
          className="projectImage h-full w-full"
        />
      ),
      projectName: t("projecttwo"),
      projectDescription: t("projects.Project-2 description"),
      projectTools: [
        <SiPhp color="#61DBFB" key={0} />,
        <SiBootstrap fill="#764abc" key={1} />,
        <SiCpanel color="#ff6c28" key={2} />,
      ],
    },

    {
      projectDemo: "https://awesome-varahamihira-16b9b2.netlify.app/",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/onlineMenu.webp"
          alt="onlinemenu"
          className="h-full w-full"
        />
      ),
      projectName: t("projectthree"),
      projectDescription: t("projects.Project-3 description"),
      projectTools: [
        <SiGatsby color="#764abc" key={0} />,
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
      projectDemo: "https://raedahfinance-0668740915a9.herokuapp.com",
      projectImage: (
        <Image
          width={1900}
          height={1000}
          src="/images/raedahfinanceb.png"
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
    <article className="relative h-screen overflow-hidden pt-20">
      <h3 className="sectionHeading ">{t("projects.Projects title")}</h3>
      <div className="relative z-20 flex h-[calc(100vh_-_8rem)] w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
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
      </div>
      <div className="absolute top-[30%] left-0 h-[50vh] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </article>
  );
}
