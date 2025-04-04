import Image from "next/image";
import { usePathname } from "next/navigation";

import { P } from "components";
import { cn } from "utils/cn";

import dottedWorldMapSrc from "./img/dottedWorldMap.png";
import emailSrc from "./img/email.svg";
import locationSignSrc from "./img/locationSign.svg";
import phoneSrc from "./img/phone-circle-fill.svg";

export const Footer = () => {
  const pathname = usePathname();
  const isDarkBg = pathname === "/about-us" || pathname === "/building";
  const containerClassName = cn(
    "mt-44 w-full absolute left-0 z-20",
    isDarkBg ? "bg-black" : "bg-secondary",
  );

  return (
    <footer className={containerClassName}>
      <div className="flex flex-col md:items-start items-center gap-5 justify-between max-w-[1440px] mx-auto pt-[60px] pb-4 px-4 md:px-10">
        <h4 className="max-w-[560px] md:text-2xl text-lg md:text-start text-center">
          Write us to schedule a call to discuss your project and learn more
          about sunrise studio
        </h4>
        <div className="flex gap-6 items-center">
          <Image src={emailSrc} alt="email" />
          <address>
            <a
              href="mailto:office@sunrisestd.com"
              className="not-italic text-base font-bold hover:opacity-80 transition-opacity"
            >
              office@sunrisestd.com
            </a>
          </address>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={phoneSrc} alt="phone" />
          <address>
            <a
              href="tel:+18504177745"
              className="not-italic text-base font-bold hover:opacity-80 transition-opacity"
            >
              (+1) 850-417-7745
            </a>
          </address>
        </div>
        <address className="flex gap-4 items-center mt-16">
          <Image src={locationSignSrc} alt="location sign" />
          <a
            href="https://maps.google.com/?q=Ul.+Obozowa+20,+01-161+Warszawa,+Polska"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity not-italic"
          >
            <P className="font-bold">Ul. Obozowa 20, 2nd floor</P>
            <P className="font-bold">01-161 Warszawa, Polska</P>
          </a>
        </address>
        <div className="flex justify-center w-full">
          <P className="text-center">
            © 2024 Sunrise Studio. All rights reserved. Designed in Poland.
          </P>
        </div>
        <Image
          src={dottedWorldMapSrc}
          alt="dotted world map"
          className="absolute top-0 right-0 -z-10"
          style={{ opacity: 0.5 }}
        />
      </div>
    </footer>
  );
};
