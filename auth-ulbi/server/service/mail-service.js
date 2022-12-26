const nodemailer = require("nodemailer");

class MailService {

  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: "ismaissy2001@gmail.com",
        pass: "2001ismaissy",
      },
    });
  }

  async sendActivationMail(to, link) {
    console.log("isma activationLink: " + link);
    console.log("EMAIL: " + to);

    await this.transporter.sendMail({
      from: "ismaissy2001@gmail.com",
      to,
      subject: "Activation account on " + process.env.API_URL,
      text: "",
      html: ` 
          <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href="${link}">${link}</a>
          </div>
        `,
    });
  }
}

module.exports = new MailService();
// host: process.env.SMTP_HOST,
// port: process.env.SMTP_PORT,
/*
 user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
*/
