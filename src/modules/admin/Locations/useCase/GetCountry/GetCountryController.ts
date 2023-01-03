import { GetCountryUseCase } from './GetCountryUseCases';
import { Request, Response } from 'express';
var geoip = require('geoip-lite');

class GetCountryController {
    constructor(public GetCountryUseCase : GetCountryUseCase){}

    async handle(request: Request, response: Response): Promise<any>{

        const Status:any = request.query.Status ? request.query.Status : null
        
        const result = await this.GetCountryUseCase.execute({ Status: Status });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetCountryController
}