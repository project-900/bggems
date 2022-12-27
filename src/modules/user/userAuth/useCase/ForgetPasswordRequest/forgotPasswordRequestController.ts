import { ForgotPasswordRequestUseCase } from './forgotPasswordRequestUseCases';
import { Request, Response } from 'express';

class ForgotPasswordRequestController {
    constructor(public forgotPasswordRequestUseCase : ForgotPasswordRequestUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            Email, 
        } = request.body;
        const result = await this.forgotPasswordRequestUseCase.execute({ Email });
        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    ForgotPasswordRequestController
}