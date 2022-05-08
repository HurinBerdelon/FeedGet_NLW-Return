export interface SendMailDTO {
    subject: string
    body: string
}

export interface IMailProvider {
    sendMail(data: SendMailDTO): void
}