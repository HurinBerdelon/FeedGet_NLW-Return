import nodemailer from 'nodemailer'
import { IMailProvider, SendMailDTO } from "../IMailProvider";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_INBOX_USER,
        pass: process.env.MAILTRAP_INBOX_PASS
    }
});

export class NodemailerMailProvider implements IMailProvider {

    async sendMail({ subject, body }: SendMailDTO): Promise<void> {
        await transport.sendMail({
            from: 'Equipe FeedGet <suport@feedget.com>',
            to: 'Fernando Cardozo <fernando_cardozo@poli.ufrj.br>',
            subject,
            html: body
        })
    }
}