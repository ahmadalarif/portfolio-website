import React, { useRef } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import emailjs from "@emailjs/browser";



type Props = {};

export default function ContactMe({}: Props) {
const form = useRef(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ezlq82m",
        "template_zbps26q",
        form.current,
        "aqbRKySxzj9RvzG2-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <div className="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mx-auto flex w-full max-w-[85vw] flex-col space-y-2 sm:w-fit sm:max-w-full text-start"
          >
            <input className="contactInput " placeholder="Name" name="name" />

            <input
              type="email"
              className="contactInput ... peer block "
              name="user_email"
              placeholder="Email"
              required
            />
            <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
              {t("contact.Contact valid")}
            </p>
            <textarea
              name="message"
              className="contactInput "
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" value={"send"} className="rounded-md bg-[#F7AB0A] py-1 px-10 text-lg font-bold text-black ">
              {t("contact.Contact send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
