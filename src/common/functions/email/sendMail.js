import nodemailer from "nodemailer";

export async function sendMail({
  to,
  subject,
  html,
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to,
      subject,
      html,
    });

    console.log("Mail sent:", info.messageId);

    return true;
  } catch (error) {
    console.error("Failed to send mail:", error.message);
    return false;
  }
}