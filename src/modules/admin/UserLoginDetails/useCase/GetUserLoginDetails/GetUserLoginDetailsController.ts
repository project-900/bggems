import { GetUserLoginDetailsUseCase } from './GetUserLoginDetailsUseCases';
import { Request, Response } from 'express';

class GetUserLoginDetailsController {
    constructor(public GetUserLoginDetailsUseCase : GetUserLoginDetailsUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        
        const Skip: any = request.query.Skip;
        const Limit: any = request.query.Limit;
        const WhereClause: any = {};
        
        if(request.query.UserId){
            WhereClause.UserId = request.query.Status;
        }
        if(request.query.Date){
            WhereClause.Date = request.query.Date;
        }
        if(request.query.Time){
            WhereClause.Time = request.query.Time;
        }
        if(request.query.Country){
            WhereClause.Country = request.query.Country;
        }
        if(request.query.Region){
            WhereClause.Region = request.query.Region;
        }
        if(request.query.City){
            WhereClause.City = request.query.City;
        }

        const result = await this.GetUserLoginDetailsUseCase.execute({ Skip, Limit, WhereClause });

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    GetUserLoginDetailsController
}