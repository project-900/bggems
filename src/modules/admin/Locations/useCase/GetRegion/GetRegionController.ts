import { GetRegionUseCase } from './GetRegionUseCases';
import { Request, Response } from 'express';

class GetRegionController {
    constructor(public GetRegionUseCase : GetRegionUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        
        const Status:any = request.query.Status ? request.query.Status : null
        const CountryId:any = request.query.CountryId ? request.query.CountryId : null
        
        const result = await this.GetRegionUseCase.execute({ Status: Status, CountryId: CountryId });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetRegionController
}