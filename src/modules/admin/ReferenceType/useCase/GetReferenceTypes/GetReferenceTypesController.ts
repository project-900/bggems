import { GetReferenceTypesUseCase } from './GetReferenceTypesUseCases';
import { Request, Response } from 'express';

class GetReferenceTypesController {
    constructor(public GetReferenceTypesUseCase : GetReferenceTypesUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        
        const Status :any = request.query.Status;
        const result = await this.GetReferenceTypesUseCase.execute({ Status: Status ? Status : 'all' });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetReferenceTypesController
}