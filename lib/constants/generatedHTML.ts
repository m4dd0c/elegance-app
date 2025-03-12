import { iSendMail } from "@/types";

function generatedHTML({ name, email, phone, message, subject }: iSendMail) {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 5px;
          }
          p {
            color: #555;
            line-height: 1.6;
          }
          strong {
            color: #222;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      </body>
    </html>
  `;
}

export { generatedHTML };
