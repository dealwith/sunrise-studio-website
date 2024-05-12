import { ContactUsSchema } from "@/components/utils/validation/ContactUsSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.text();
  const result = ContactUsSchema.safeParse(JSON.parse(body));

  try {
    if (result.success) {
      const { email, name, message } = result.data;

      const data = await resend.emails.send({
        from: email,
        to: "office@sunrisestd.com",
        subject: `Message from: ${name}`,
        text: message || "",
      });

      return Response.json({
        status: "success",
        message: "Email sent successfully",
        data,
      });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
