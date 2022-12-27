import { AddSalesPersonsUseCase } from './AddSalesPersonUseCases';
import { Request, Response } from 'express';

class AddSalesPersonsController {
    constructor(public AddSalesPersonsUseCase : AddSalesPersonsUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            Name,
            ShortName,
        } = request.body;

        const result = await this.AddSalesPersonsUseCase.execute({ Name, ShortName, Status: 'active' });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    AddSalesPersonsController
}