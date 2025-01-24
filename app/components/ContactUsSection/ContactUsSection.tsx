"use client";

import { forwardRef } from "react";

import { FeedbackForm, H2, H3, Section } from "components";
import { cn } from "utils/cn";

type TProps = {
  isMainPage?: boolean;
};

export const ContactUsSection = forwardRef<HTMLDivElement, TProps>(
  ({ isMainPage }, ref) => {
    const containerClassName = cn(
      "py-[60px] px-4 flex flex-col items-center gap-[60px] rounded-2xl",
      isMainPage ? "bg-black" : "bg-accent",
    );
    const buttonClassName = cn(
      isMainPage ? "bg-accent" : "bg-black",
      "hover:bg-white hover:text-accent transition-all",
    );

    return (
      <Section>
        <div id="contactUs" className={containerClassName} ref={ref}>
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
  },
);

ContactUsSection.displayName = "ContactUsSection";
