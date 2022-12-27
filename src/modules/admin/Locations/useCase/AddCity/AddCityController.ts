import { AddCityUseCase } from './AddCityUseCases';
import { Request, Response } from 'express';

class AddCityController {
    constructor(public AddCityUseCase : AddCityUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            CityName, 
            CountryId, 
            RegionId, 
            TimeZone
        } = request.body;

        const result = await this.AddCityUseCase.execute({ CityName, CountryId, RegionId, TimeZone });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    AddCityController
}