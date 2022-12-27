import { GetCityUseCase } from './GetCityUseCases';
import { Request, Response } from 'express';

class GetCityController {
    constructor(public GetCityUseCase : GetCityUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        
        const Status:any = request.query.Status ? request.query.Status : null
        const CountryId:any = request.query.CountryId ? request.query.CountryId : null
        const RegionId:any = request.query.RegionId ? request.query.RegionId : null
        
        const result = await this.GetCityUseCase.execute({ Status: Status, CountryId, RegionId });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetCityController
}