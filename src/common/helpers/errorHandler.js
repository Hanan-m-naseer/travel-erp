import { sendMail } from "../functions/email/sendMail.js";
import { SERVER_ERROR_SEND_MAIL_LIST } from "../constants/email/index.js";

export async function errorHandler(error, module = "Unknown Module") {

     console.log("errorHandler triggered");
  await sendMail({
    to: SERVER_ERROR_SEND_MAIL_LIST,
    subject: `Error Mail - ${module}`,
    html: `
      <h2>Server Error</h2>
      <p><strong>Module:</strong> ${module}</p>
      <p><strong>Message:</strong> ${error.message}</p>
      <pre>${error.stack}</pre>
    `,
  });
}