import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

import { H3, P } from "components";

type TProps = {
  image: StaticImageData;
  name: string;
  role: string;
};

export const OurTeamCard: FunctionComponent<TProps> = ({
  image,
  name,
  role,
}) => {
  return (
    <div className="lg:max-w-[322px] sm:max-w-[300px] max-w-full px-3">
      <Image src={image} alt="photo" className="mb-3.5 rounded-2xl" />
      <H3 className="text-2xl !font-unbounded">{name}</H3>
      <P className="font-light">{role}</P>
    </div>
  );
};
