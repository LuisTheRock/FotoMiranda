import nodemailer from 'nodemailer';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_ACCOUNT_EMAIL,
        pass: process.env.GMAIL_ACCOUNT_PASSWORD, //palavra passe gerada pelo gmail
      },
    });
  }

  async sendEmail(
    name: string,
    email: string,
    message: string,
    cellphone?: string
  ): Promise<void> {
    const mailOptions = {
      from: `${name} & ${email}`,
      to: process.env.GMAIL_ACCOUNT_EMAIL,
      subject: `Contato por ${email}`,
      text: `Sr/a\t${name}\nEmail: ${email}\nContacto: ${cellphone}\n\nMensagem:\n\t${message}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
