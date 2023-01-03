import { AddCountryUseCase } from './AddCountryUseCases';
import { Request, Response } from 'express';

class AddCountryController {
    constructor(public AddCountryUseCase : AddCountryUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const { 
            CountryName,
            CountryCode,
            ShortName,
            Continent
        } = request.body;

        const result = await this.AddCountryUseCase.execute({ CountryName, CountryCode, ShortName, Continent });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    AddCountryController
}