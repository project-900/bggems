import { VerifyUserUseCase } from './VerifyUserUseCases';
import { Request, Response } from 'express';

class VerifyUserController {
    constructor(public VerifyUserUseCase : VerifyUserUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            UserId, 
            Verify, 
        } = request.body;
                
        const result:any = await this.VerifyUserUseCase.execute({ UserId, Verify: Verify == "true" ? Verify : "false" });
        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    VerifyUserController
}