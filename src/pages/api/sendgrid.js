const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: "ahmadalarif4@gmail.com",
    from: "alarif3@gmail.com",
    subject: "AhmadArif.com New Web Form Email!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Form submitted" });
  
};
