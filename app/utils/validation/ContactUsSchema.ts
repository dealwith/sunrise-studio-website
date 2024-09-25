import { z } from "zod";

export const ContactUsSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(1, { message: "Must be 1 or more characters long" })
    .max(30, { message: "Must be 30 or fewer characters long" }),
  email: z.string({ invalid_type_error: "Email is required" }).email(),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;

        const phoneRegex = /^[+]?[0-9]{6,18}$/;

        return phoneRegex.test(value);
      },
      { message: "Invalid phone number format" },
    ),
  message: z.string().optional(),
});
