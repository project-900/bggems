import { RegistrationUseCase } from './registrationUseCases';
import { Request, Response } from 'express';

class RegistrationController {
    constructor(public RegistrationUseCase : RegistrationUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            FirstName, 
            LastName, 
            Username, 
            Email, 
            MobileNo, 
            Password,

            BusinessTypeId,
            CompanyName,
            CompanyAddress,
            CountryCode,
            OfficePhoneCountryCode, 
            OfficePhoneNumber,
            CountryId,
            RegionId,
            CityId,
            ZipCode,
            ReferenceId,
            SalesPersonId,
        } = request.body;
        
        // console.log({file: request.file});
        
        const files: any = request.file;
        const Image: any = files?.filename;
        
        const result = await this.RegistrationUseCase.execute({ FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image});
        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    RegistrationController
}