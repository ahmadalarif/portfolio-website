import React, { useTransition } from 'react'
import ExperienceCard from './ExperienceCard'
import { useTranslation } from "next-i18next";
type Props = {}

export default function Experience({}: Props) {
    const { t } = useTranslation();

  return (
    <div className="h-screen pt-20 overflow-hidden">
      <h3 className="sectionHeading">{t("experience.Experience")}</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll pg-10 snap-x snap-mandatory scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
      </div>
    </div>
  );
}