import { FindUserUseCase } from './findUserUseCases';
import { Request, Response } from 'express';

class FindUserController {
    constructor(public FindUserUseCase : FindUserUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            UserId, 
        } = request.body;
        const result = await this.FindUserUseCase.execute({ UserId });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    FindUserController
}