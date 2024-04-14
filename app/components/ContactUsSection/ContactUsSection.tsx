"use client";

import { useForm } from "react-hook-form";
import { Button, H2, Input, Section, Span } from "components";

import styles from "./contactUsSection.module.scss";

export const ContactUsSection = () => {
  const { register } = useForm();

  return (
    <Section>
      <div id="contactUs" className={styles.component}>
        <H2>Contact us</H2>
        <form method="POST" className={styles.form}>
          <div className="flex gap-6">
            <div className="w-1/2">
              <label htmlFor="name" className="label">
                <Span className="label-text">Name</Span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Julia"
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
                placeholder="juliades53@gmail.com"
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
          <div className="flex justify-end">
            <Button className="bg-accent" size="m">
              Contact us
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};
