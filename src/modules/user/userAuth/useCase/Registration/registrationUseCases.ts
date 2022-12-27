import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
import { ISendMailRepository } from '../../../../Services/SendMail/repository/ISendMailRepository';
// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const USER_ROLE_ID = process.env.USER_ROLE_ID

interface IRequests{
    FirstName: string, 
    LastName: string, 
    Username: string, 
    Email: string, 
    MobileNo: string, 
    Password: string,
    BusinessTypeId: string,
    CompanyName: string, 
    CompanyAddress: string, 
    CountryCode: string, 
    OfficePhoneCountryCode: string, 
    OfficePhoneNumber: string
    CountryId: string, 
    RegionId: string, 
    CityId: string, 
    ZipCode: string, 
    ReferenceId: string, 
    SalesPersonId: string, 
    Image: string, 
}

class RegistrationUseCase {
    constructor(
        private userAuthRepository: IUserAuthRepository, 
        private sendMailRepository: ISendMailRepository 
    ){}

    async execute({FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image }: IRequests):Promise<any>{
        try{

            const checkEmail = await this.userAuthRepository.findEmailUser({ Email })
            if(checkEmail){
                return {
                    Status: false,
                    message: 'Email is already exists...',
                    data: {}
                };
            }

            const checkUsername = await this.userAuthRepository.findUsername({ Username })
            if(checkUsername){
                return {
                    Status: false,
                    message: 'Username is already exists, Please choose another username...',
                    data: {}
                };
            }
            
            const Registration = await this.userAuthRepository.registration({ FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image })
            if(Registration == null){
                return {
                    Status: false,
                    message: 'Registration failed, Please try again later...',
                    data: {}
                };
            }else{
                let roleData:any = {
                    UserId: Registration.Id,
                    RoleId: USER_ROLE_ID
                }
                const CreateRole = await this.userAuthRepository.createUserRole(roleData)
                return {
                    Status: true,
                    message: 'Registration successfully...',
                    data: Registration
                };
            }
        }catch {
            return {
                Status: false,
                message: 'Something went wrong...',
                data: {}
            };                
        }        

    };

}

export {
    RegistrationUseCase
}