import { FunctionComponent, useTransition } from "react";
import { useForm } from "react-hook-form";
import { ButtonWithLoading, Input, Span } from "components";
import { IContactUsForm } from "./interfaces/IContactUsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsSchema, cn } from "utils";
import sendEmailService from "services/SendEmailService";
import { toast } from "react-toastify";

type TProps = {
  buttonClassName: string;
  buttonText: string;
  buttonPosition: string;
};

export const FeedbackForm: FunctionComponent<TProps> = ({
  buttonClassName,
  buttonText,
  buttonPosition,
}) => {
  const buttonPositionClassName = cn(buttonPosition, "flex mt-3.5");
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

  return (
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
              placeholder="+1 (555) 123-4567"
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
      <div className={buttonPositionClassName}>
        <ButtonWithLoading
          className={buttonClassName}
          isLoading={isPending}
          text={buttonText}
        />
      </div>
    </form>
  );
};
