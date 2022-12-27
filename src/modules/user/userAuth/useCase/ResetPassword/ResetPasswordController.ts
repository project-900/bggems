import { ResetPasswordUseCase } from './ResetPasswordUseCases';
import { Request, Response } from 'express';

class ResetPasswordController {
    constructor(public ResetPasswordUseCase : ResetPasswordUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            Token, 
            Password, 
        } = request.body;

        const result = await this.ResetPasswordUseCase.execute({ Token, Password });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    ResetPasswordController
}