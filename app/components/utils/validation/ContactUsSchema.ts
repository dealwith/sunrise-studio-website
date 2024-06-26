import { z } from "zod";

export const ContactUsSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(1, { message: "Must be 1 or more characters long" })
    .max(30, { message: "Must be 30 or fewer characters long" }),
  email: z.string({ invalid_type_error: "Email is required" }).email(),
  message: z.string().optional(),
});
