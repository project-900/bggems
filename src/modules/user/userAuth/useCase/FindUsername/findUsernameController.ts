import { FindUsernameUseCase } from './findUsernameUseCases';
import { Request, Response } from 'express';

class FindUsernameController {
    constructor(public FindUsernameUseCase : FindUsernameUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            Username 
        } = request.body;

        const result = await this.FindUsernameUseCase.execute({ Username });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    FindUsernameController
}