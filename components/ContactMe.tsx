import React, { useRef } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "next-i18next";



type Props = {};

export default function ContactMe({}: Props) {

const { t } =  useTranslation();
  return (
    <div className="mx-auto h-screen w-[90%] overflow-hidden pt-20">
      {"  "}
      <h3 className="sectionHeading ">{t("contact.Contact")}</h3>
      <div className="mx-auto flex h-[calc(100vh_-_8rem)] max-w-7xl flex-col items-center justify-start space-y-10 overflow-y-scroll px-10 text-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:text-left">
        <div className="flex w-full flex-col items-center justify-evenly space-y-5 pt-8 2xl:space-y-10">
          <h4 className="text-center text-lg font-semibold sm:text-2xl 2xl:text-4xl ">
            {t("contact.Contact title")}
          </h4>

          <div className="flex items-center justify-center space-x-2 sm:space-x-5">
            <EnvelopeIcon className="h-5 w-5 animate-pulse text-[#FFE55C] sm:h-7 sm:w-7" />
            <div className="text-sm sm:text-xl 2xl:text-2xl">
              alarif3@gmail.com
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-5">
            {"  "}
            <FaWhatsapp className="h-5 w-5 animate-pulse text-[#FFE55C] sm:h-7 sm:w-7" />
            {"  "}
            <a
              href="https://wa.me/966565606064"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"  "}
              <div className="text-sm sm:text-xl 2xl:text-2xl">
                {"  "}
                {t("contact.Contact whatsApp")}
              </div>
            </a>
          </div>
        </div>
        <form
          target="_blank"
          action="https://formsubmit.co/alarif3@gmail.com"
          method="POST"
          className="mx-auto flex w-fit flex-col space-y-2 "
        >
          <div className="flex flex flex-col gap-4 space-x-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 ">
            <label className="rounded-lg bg-[#94a3b81a] p-2 py-5 text-start">
              {t("contact.Contact name")}
            </label>
            <input className="contactInput" type="text" name="name" />
            <label className="rounded-lg rounded-lg bg-[#94a3b81a] p-2 py-5 text-start">
              {t("contact.Contact email")}
            </label>
            <input className="contactInput" type="email" name="email" />
          </div>
          <label className="text-start ">{t("contact.Contact subject")}</label>
          <input className="contactInput" type="text" name="subject" />
          <label className="p-0 text-start">
            {t("contact.Contact message")}
          </label>
          <textarea className="contactInput" name="message" />
          <button
            type="submit"
            className="rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black "
          >
            {t("contact.Contact send")}
          </button>
        </form>
      </div>
    </div>
  );
}
