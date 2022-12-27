import { GetBusinessTypesUseCase } from './GetBusinessTypesUseCases';
import { Request, Response } from 'express';

class GetBusinessTypesController {
    constructor(public GetBusinessTypesUseCase : GetBusinessTypesUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const Status :any = request.query.Status;

        const result = await this.GetBusinessTypesUseCase.execute({ Status: Status ? Status : 'active' });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetBusinessTypesController
}