import { AddBusinessTypesUseCase } from './AddBusinessTypesUseCases';
import { Request, Response } from 'express';

class AddBusinessTypesController {
    constructor(public AddBusinessTypesUseCase : AddBusinessTypesUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            BusinessType,
        } = request.body;

        const result = await this.AddBusinessTypesUseCase.execute({ BusinessType, Status: 'active' });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    AddBusinessTypesController
}