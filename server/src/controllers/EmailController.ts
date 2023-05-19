import { Request, Response } from 'express';
import { EmailService } from '../services/EmailService';
import { ISendEmail } from '../interfaces/ISendEmail';

export class EmailController {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  async sendEmail(req: Request, res: Response): Promise<void> {
    const { name, email, message, cellphone }: ISendEmail = req.body;

    console.log(name, email, message, cellphone);

    try {
      await this.emailService.sendEmail(name, email, message, cellphone);
      res.send({ message: 'Mensagem enviada' });
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: 'Não é possível enviar a sua mensagem' });
    }
  }
}
