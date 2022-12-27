import { AddRegionUseCase } from './AddRegionUseCases';
import { Request, Response } from 'express';

class AddRegionController {
    constructor(public AddRegionUseCase : AddRegionUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            RegionName,
            ShortName,
            CountryId
        } = request.body;

        const result = await this.AddRegionUseCase.execute({ RegionName, ShortName, CountryId });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    AddRegionController
}