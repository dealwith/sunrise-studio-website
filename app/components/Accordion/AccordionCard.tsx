import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

import { P } from "@/components";

type TProps = {
  title: string;
  description: string;
  activeCard?: string;
  setActiveCard: Dispatch<SetStateAction<string>>;
  index?: number;
};

export const AccordionCard: FunctionComponent<TProps> = ({
  title,
  description,
  activeCard,
  setActiveCard,
  index,
}) => {
  const isActive = String(index) === activeCard;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActiveCard(isActive ? "" : String(index));
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0";
      }
    }
  }, [isActive]);

  return (
    <div
      className="hover:cursor-pointer flex flex-col py-6 md:px-14 px-6 bg-white text-black rounded-2xl"
      onClick={handleClick}
    >
      <div>
        <h4 className="text-2xl">
          {isActive ? "-" : "+"} {title}
        </h4>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out max-h-0"
        >
          <P className="pt-2 mt-2">{description}</P>
        </div>
      </div>
    </div>
  );
};
