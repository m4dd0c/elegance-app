"use server";
import { iSendMail } from "@/types";
import { generatedHTML } from "../constants/generatedHTML";
import { createTransport } from "nodemailer";

export async function sendMail({
  name,
  email,
  phone,
  subject,
  message,
}: iSendMail) {
  const SMTP_PSK = process.env.SMTP_PSK;
  const SMTP_MAIL = process.env.SMTP_MAIL;
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || "") || 587;
  const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
  if (!SMTP_MAIL || !SMTP_PSK) return false;

  const body = generatedHTML({ name, email, phone, message, subject });
  try {
    const transport = createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PSK,
      },
    });
    const mail = await transport.sendMail({
      to: SMTP_MAIL,
      from: SMTP_MAIL,
      html: body,
      subject: `A ${subject} | Mahesh Handicrafts`,
    });
    return !!mail;
  } catch (error) {
    return false;
  }
}
