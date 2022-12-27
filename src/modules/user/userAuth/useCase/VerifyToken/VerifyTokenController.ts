import { VerifyTokenUseCase } from './VerifyTokenUseCases';
import { Request, Response } from 'express';

class VerifyTokenController {
    constructor(public VerifyTokenUseCase : VerifyTokenUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            Token, 
        } = request.params;
        console.log({"======= token ===========": Token});

        const result = await this.VerifyTokenUseCase.execute({ Token });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    VerifyTokenController
}