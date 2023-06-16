import About from "components/About";
import ContactMe from "components/ContactMe";
import Experience from "components/Experience";
import Header from "components/Header";
import Hero from "components/Hero";
import Projects from "components/Projects";
import Skills from "components/Skills";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RxDoubleArrowUp } from "react-icons/rx";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "components/navigation";

export const config = { unstable_runtimeJS: false}

export default function Home() {

  const { t } = useTranslation();
  
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>{t("home.Home title")}</title>
        <meta name="description" content={t("home.Home description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          className="rounded-full"
          href="/images/ahmad-arif-headshot.webp"
        />
      </Head>
      

      <Header />
      <section id="hero" className="snap-start">
          <Navigation />
  
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start z-20">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 cursor-pointer z-[100] group w-[5rem] mx-auto">
          <div className="flex items-center justify-center mx-auto ">
            <Image
              priority
              width={40}
              height={40}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
              src="/images/ahmad-arif-headshot.webp"
              alt="Home Button"
            />
            <RxDoubleArrowUp
              className="h-10 w-10 absolute ml-[5rem] scale-0 group-hover:scale-100 transition-transform duration-200"
              color="#F0DB4F"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
export async function getStaticProps ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}