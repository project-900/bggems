import { AddReferenceTypesUseCase } from './AddReferenceTypesUseCases';
import { Request, Response } from 'express';

class AddReferenceTypesController {
    constructor(public AddReferenceTypesUseCase : AddReferenceTypesUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            ReferenceType
        } = request.body;

        const result = await this.AddReferenceTypesUseCase.execute({ ReferenceType, Status : 'active' });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    AddReferenceTypesController
}