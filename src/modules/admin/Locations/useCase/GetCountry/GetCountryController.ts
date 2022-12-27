import { GetCountryUseCase } from './GetCountryUseCases';
import { Request, Response } from 'express';
var geoip = require('geoip-lite');

class GetCountryController {
    constructor(public GetCountryUseCase : GetCountryUseCase){}

    async handle(request: Request, response: Response): Promise<any>{

        const Status:any = request.query.Status ? request.query.Status : null
        
        
        var static_ip = "207.97.227.239";
        var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null;
        var geo = geoip.lookup(ip);
        var static_ip_geo = geoip.lookup(static_ip);
        console.log(geo);
        let data:any = {
            ip, 
            geo,
            static_ip,
            static_ip_geo
        }
        console.log(data);
        return response.status(200).send(data);

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