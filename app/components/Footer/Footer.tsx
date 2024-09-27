import Image from "next/image";
import { FunctionComponent } from "react";
import { P } from "components";
import { cn } from "utils/cn";

import emailSrc from "./img/email.svg";
import locationSignSrc from "./img/locationSign.svg";
import dottedWorldMapSrc from "./img/dottedWorldMap.png";

type TProps = {
  isMainPage?: boolean;
};

export const Footer: FunctionComponent<TProps> = ({ isMainPage }) => {
  const containerClassName = cn(
    "mt-44 w-full absolute left-0 -z-20",
    isMainPage ? "bg-secondary" : "bg-black",
  );

  return (
    <footer className={containerClassName}>
      <div className="flex flex-col md:items-start items-center gap-8 justify-between max-w-[1440px] mx-auto pt-[60px] pb-4 px-4 md:px-10">
        <h4 className="max-w-[560px] md:text-2xl text-lg md:text-start text-center">
          Write us to schedule a call to discuss your project and learn more
          about sunrise studio
        </h4>
        <div className="flex gap-6 items-center">
          <Image src={emailSrc} alt="email" />
          <address>
            <a
              href="mailto:office@sunrisestd.com"
              className="not-italic text-base font-bold"
            >
              office@sunrisestd.com
            </a>
          </address>
        </div>
        <div className="flex gap-4 items-center mt-16">
          <Image src={locationSignSrc} alt="location sign" />
          <div>
            <P className="font-bold">Ul. Obozowa 20/194</P>
            <P className="font-bold">01-161 Warszawa, Polska</P>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <P className="text-center">
            © 2024 Sunrise Studio. All rights reserved. Designed in Poland.
          </P>
        </div>
        <Image
          src={dottedWorldMapSrc}
          alt="dotted world map"
          className="absolute top-0 right-0 -z-10"
        />
      </div>
    </footer>
  );
};
