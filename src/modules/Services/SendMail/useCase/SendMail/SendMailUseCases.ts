import { ISendMailRepository } from '../../repository/ISendMailRepository';
interface IRequests {
    Email: string,
    Subject: string,
    Template: string,
    Body: string,
}

class SendMailUseCase {
    constructor(private SendMailRepository: ISendMailRepository) { }

    async execute({ Email, Subject, Template, Body, }: IRequests): Promise<any> {
        try {
            const SendMail = await this.SendMailRepository.sendMail({ Email, Subject, Template, Body, })
            if (SendMail == null) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Business types Add successfully...',
                    data: SendMail
                };
            }
        } catch {
            return {
                Status: false,
                message: 'Something went wrong, Please try again later...',
                data: {}
            };
        }

    };

}

export {
    SendMailUseCase
}