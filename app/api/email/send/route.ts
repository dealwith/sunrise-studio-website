import { ContactUsSchema } from "utils/validation/ContactUsSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.text();
  const result = ContactUsSchema.safeParse(JSON.parse(body));

  try {
    if (result.success) {
      const { email, name, message, company, phone } = result.data;

      const data = await resend.emails.send({
        from: "Sunrise Studio <office@sunrisestd.com>",
        to: "office@sunrisestd.com",
        subject: `New Message from ${name}`,
        html: `
          <html>
              <body>
                  <h1>You have received a new message from ${name}</h1>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Company:</strong> ${company}</p>
                  <p><strong>Phone:</strong> ${phone || "No phone provided."}</p>
                  <p><strong>Message:</strong> ${message || "No message provided."}</p>
              </body>
          </html>
          `,
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
