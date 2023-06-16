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

export default function Projects({ }: Props) {
  
    const { t } = useTranslation();

  
  const projects = [
    {
      projectDemo: "https://fitness.yottaline.com",
      projectImage: (
        <Image
          width={1400}
          height={1000}
          src="/images/almacenter-image.webp"
          alt="fitness user interface"
          className="w-full h-full"
        />
      ),
      projectName: t("projectone"),
      projectDescription:
       t('projects.Project-1 description'),
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
          className="w-full h-full"
        />
      ),
      projectName: t('projecttwo'),
      projectDescription:
       t('projects.Project-2 description'),
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
          className="w-full h-full"
        />
      ),
      projectName: t("projectthree"),
      projectDescription:
        t('projects.Project-3 description'),
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
          className="w-full h-full"
        />
      ),
      projectName: t("projectfour"),
      projectDescription:
        t('projects.Project-4 description'),
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
          className="w-full h-full"
        />
      ),
      projectName: t("projectfive"),
      projectDescription:
        t('projects.Project-5 description'),
      projectTools: [
        <SiRuby color="#ba2121" key={0} />,
        <SiRubyonrails color="#d30001" key={1} />,
      ],
    },
  ];
  return (
    <article className="relative h-screen pt-20 overflow-hidden">
      <h3 className="sectionHeading ">{t("projects.Projects title")}</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </article>
  );
}
