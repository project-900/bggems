import { SendMailUseCase } from './SendMailUseCases';
import { Request, Response } from 'express';

class SendMailController {
    constructor(public SendMailUseCase : SendMailUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            Email,
            Subject,
            Template,
            Body,
            Attachments
        } = request.body;

        const result = await this.SendMailUseCase.execute({ Email, Subject, Template, Body, });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    SendMailController
}