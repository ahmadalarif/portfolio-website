import React, { useEffect } from "react";
import { SiNextdotjs, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      projectDemo: "https://amazon-clone-arifm6.vercel.app/",
      projectImage: <img src="amazon-project.png" className="w-full h-full" />,
      projectName: "Amazon Clone",
      projectDescription:
        ' A simple mock amazon clone that allows simulates some of the experience found on amazon. This website allows user login, checkout (including payment processing), and more! Note your computer may give a security error because the website name includes "amazon" which is flagged by most web browsers',
      projectTools: [
        <SiNextdotjs fill="white" key={0} />,
        <SiRedux fill="#764abc" key={1} />,
        <img
          src="firebase-logo.png"
          alt="Firebase"
          className="object-contain"
          key={2}
        />,
        <SiTailwindcss color="#38bdf8" key={3} />,
        <img
          src="next-auth-logo.png"
          alt="Next-Auth"
          className="object-contain"
          key={4}
        />,
      ],
    },
    {
      projectDemo: "https://netflix-clone-45ea5.web.app/",
      projectImage: <img src="netflix-project.png" className="w-full h-full" />,
      projectName: "Netflix Clone",
      projectDescription:
        " A simple mock netflix clone that simulates some of the experiences found on netflix. This includes using an API to display movie recommendations, user account creation and login, user subscription, and more!",
      projectTools: [
        <SiReact color="#61DBFB" key={0} />,
        <SiRedux fill="#764abc" key={1} />,
        <img
          src="firebase-logo.png"
          alt="Firebase"
          className="object-contain"
          key={2}
        />,
        <FaStripe fill="#008cdd" key={3} />,
      ],
    },
  ];
  return (
    <article className="relative h-screen pt-20 overflow-hidden">
      <h3 className="sectionHeading ">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 h-[calc(100vh_-_8rem)] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
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
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[50vh] -skew-y-12"></div>
    </article>
  );
}
