import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";



// type Props = {};

// export default function Hero({}: Props) {
  const Hero = () => {
  const { t } = useTranslation();
  const [text, count] = useTypewriter({
    words: [
      t("hero.Hero welcome1"),
      t("hero.Hero welcome2"),
      t("hero.Hero welcome3"),
    ],
    loop: false,
    delaySpeed: 1500,
    deleteSpeed: 50,
    typeSpeed: 80,
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
        <div className="App">
          <span>{text}</span>
          <Cursor cursorColor="red"  />
        </div>
        <div>
          <Link href="#about" passHref>
            <button className="heroButton text-lg">
              {t("about.About title")}
            </button>
          </Link>
          <Link href="#experience" passHref>
            <button className="heroButton text-lg">
              {t("experience.Experience")}
            </button>
          </Link>
          <Link href="#skills" passHref>
            <button className="heroButton text-lg">
              {t("skills.Skills title")}
            </button>
          </Link>
          <Link href="#projects" passHref>
            <button className="heroButton text-lg">
              {t("projects.Projects title")}
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Hero;
