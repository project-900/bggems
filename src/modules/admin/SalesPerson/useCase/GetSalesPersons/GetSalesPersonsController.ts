import { GetSalesPersonsUseCase } from './GetSalesPersonsUseCases';
import { Request, Response } from 'express';

class GetSalesPersonsController {
    constructor(public GetSalesPersonsUseCase : GetSalesPersonsUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        
        const Status:any = request.query.Status
        const result = await this.GetSalesPersonsUseCase.execute({ Status: Status ? Status : 'all' });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetSalesPersonsController
}