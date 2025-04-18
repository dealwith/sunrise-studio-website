import { FunctionComponent, useState } from "react";

import { AccordionCard } from "./AccordionCard";

type TProps = {
  data: {
    title: string;
    description: string;
  }[];
};

export const Accordion: FunctionComponent<TProps> = ({ data }) => {
  const [activeCard, setActiveCard] = useState("");

  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <AccordionCard
          key={index}
          title={item.title}
          description={item.description}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          index={index}
        />
      ))}
    </div>
  );
};
