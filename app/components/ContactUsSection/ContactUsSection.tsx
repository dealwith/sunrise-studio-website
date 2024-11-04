"use client";

import { FunctionComponent } from "react";
import { FeedbackForm, H2, H3, Section } from "components";
import { cn } from "utils/cn";

type TProps = {
  isMainPage?: boolean;
};

export const ContactUsSection: FunctionComponent<TProps> = ({ isMainPage }) => {
  const buttonBgColor = isMainPage ? "bg-accent" : "bg-black";
  const containerBgColor = isMainPage ? "bg-black" : "bg-accent";
  const containerClassName = cn(
    "py-[60px] px-4 flex flex-col items-center gap-[60px] rounded-2xl",
    containerBgColor,
  );
  const buttonClassName = cn(
    buttonBgColor,
    "hover:bg-white hover:text-accent transition-all",
  );

  return (
    <Section>
      <div id="contactUs" className={containerClassName}>
        <div className="flex flex-col gap-7 items-center">
          <H2>Contact us</H2>
          <H3>Get a free quote</H3>
        </div>
        <FeedbackForm
          buttonText="Send a Message"
          buttonClassName={buttonClassName}
          buttonPosition="justify-end"
        />
      </div>
    </Section>
  );
};
