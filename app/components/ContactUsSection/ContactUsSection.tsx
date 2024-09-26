"use client";

import { FunctionComponent, useTransition } from "react";
import { useForm } from "react-hook-form";
import { ButtonWithLoading, H2, H3, Input, Section, Span } from "components";
import { IContactUsForm } from "./interfaces/IContactUsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "utils/cn";
import { ContactUsSchema } from "utils";
import sendEmailService from "services/SendEmailService";
import { toast } from "react-toastify";

type TProps = {
  isMainPage?: boolean;
};

export const ContactUsSection: FunctionComponent<TProps> = ({ isMainPage }) => {
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit: validateBeforeSubmit } =
    useForm<IContactUsForm>({
      resolver: zodResolver(ContactUsSchema),
    });

  const handleSubmit = async (data: IContactUsForm) => {
    startTransition(async () => {
      try {
        const sendEmailResult = await sendEmailService.sendEmail(data);

        if (sendEmailResult.status === "success") {
          toast("Email sent successfully!", { type: "success" });
        } else {
          toast("Email sending failed", { type: "error" });
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

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
        <form
          action="POST"
          className="max-w-xl w-full flex flex-col gap-10"
          onSubmit={validateBeforeSubmit(handleSubmit)}
        >
          <div className="flex gap-6">
            <div className="w-1/2 flex flex-col gap-3">
              <div>
                <label htmlFor="name" className="label">
                  <Span className="label-text">Name</Span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label htmlFor="company" className="label">
                  <Span className="label-text">Company</Span>
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="My Company Name"
                  {...register("company", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <div>
                <label htmlFor="email" className="label">
                  <Span className="label-text">Email</Span>
                </label>
                <Input
                  id="email"
                  type="text"
                  placeholder="example@gmail.com"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="label">
                  <Span className="label-text">Telephone</Span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+9 999 9999"
                  {...register("phone")}
                />
              </div>
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
              className={buttonClassName}
              isLoading={isPending}
              text="Send a Message"
            />
          </div>
        </form>
      </div>
    </Section>
  );
};
