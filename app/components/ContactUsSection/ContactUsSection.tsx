"use client";

import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonWithLoading, H2, Input, Section, Span } from "components";
import { IContactUsForm } from "./interfaces/IContactUsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "utils/cn";
import { ContactUsSchema } from "../utils/validation/ContactUsSchema";
import sendEmailService from "services/SendEmailService";
import { toast } from "react-toastify";

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
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit: validateBeforeSubmit } =
    useForm<IContactUsForm>({
      resolver: zodResolver(ContactUsSchema),
    });

  const handleSubmit = async (data: IContactUsForm) => {
    try {
      setIsLoading(true);
      const sendEmailResult = await sendEmailService.sendEmail(data);

      if (sendEmailResult.status === "success") {
        toast("Email sent successfully!", { type: "success" });
      } else {
        toast("Email sending failed", { type: "error" });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section>
      <div id="contactUs" className={containerClassName}>
        <H2>Contact us</H2>
        <form
          action="POST"
          className={"max-w-xl w-full flex flex-col gap-10"}
          onSubmit={validateBeforeSubmit(handleSubmit)}
        >
          <div className="flex gap-6">
            <div className="w-1/2">
              <label htmlFor="name" className="label">
                <Span className="label-text">Name</Span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="label">
                <Span className="label-text">Email</Span>
              </label>
              <Input
                id="email"
                type="text"
                placeholder="example@gmail.com"
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="label">
              <Span className="label-text">Message</Span>
            </label>
            <Input
              id="message"
              type="text"
              placeholder="I want to work with you guys"
              {...register("message")}
            />
          </div>
          <div className="flex justify-end mt-3.5">
            <ButtonWithLoading
              className={buttonBgColor}
              isLoading={isLoading}
              text="Contact us"
            />
          </div>
        </form>
      </div>
    </Section>
  );
};
