import IEmail from '../interfaces/IEmail';

export default class Email implements IEmail {
  name: string;
  email: string;
  message: string;
  cellphone?: string;

  constructor(
    name: string,
    email: string,
    message: string,
    cellphone?: string
  ) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.cellphone = cellphone;
  }
}
