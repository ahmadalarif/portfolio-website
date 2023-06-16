import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { dir } from "console";



type Props = {};

export default function Hero({}: Props) {
  const { t } = useTranslation();

  const [text, count] = useTypewriter({
    words: [
      t("hero.Hero welcome1"),
      t("hero.Hero welcome2"),
      t("hero.Hero welcome3"),
    ],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 50,
    typeSpeed: 50,
  });
  return (
    <article className="flex h-screen flex-col items-center justify-center overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        priority={true}
        width={128}
        height={128}
        className="relative mx-auto h-32 w-32 rounded-full object-scale-down "
        src="/images/ahmad-arif-headshot.webp"
        alt="ahmad arif's headshot"
      />

      <div className="z-20 space-y-4 ">
        <h2 className=" mt-4 text-sm uppercase tracking-tight text-gray-500 md:tracking-wide  ">
          {t("hero.Hero title")}
        </h2>
        <h1 className="h-12 w-full px-10 text-2xl font-thin sm:h-24 md:text-4xl lg:text-6xl  2xl:h-1/3  ">
          <span
            className="mr-3 "
            style={{
              color: "#33ff33",
              fontFamily: "BPdotsUnicase",
            }}
          >
            {text}
          </span>
          <Cursor cursorColor="#33ff33" cursorStyle="_" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton text-lg">
              {t("about.About title")}
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton text-lg">
              {t("experience.Experience")}
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-lg">
              {t("skills.Skills title")}
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-lg">
              {t("projects.Projects title")}
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
