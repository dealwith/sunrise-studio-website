import { FunctionComponent } from "react";

type TProps = {
  marker?: string;
  text: string;
};

export const LiWithMarker: FunctionComponent<TProps> = ({ marker, text }) => {
  return (
    <li className="lg:text-2xl md:text-xl text-base font-normal">
      {marker} {text}
    </li>
  );
};
