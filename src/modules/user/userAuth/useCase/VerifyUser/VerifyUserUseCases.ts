import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
import { ISendMailRepository } from '../../../../Services/SendMail/repository/ISendMailRepository'
interface IRequests{
    UserId : string, 
    Verify: string, 
}

class VerifyUserUseCase {
    constructor(
        private userAuthRepository: IUserAuthRepository,
        private sendMailRepository: ISendMailRepository 
    ){}

    async execute({ UserId, Verify }: IRequests):Promise<any>{
        try{
            const verify = await this.userAuthRepository.verifyUser({ UserId, Verify })
            if(verify == null){
                return {
                    Status: false,
                    message: 'Verify User failed, Please try again later...',
                    data: {}
                };
            }else{
                let mailBody = {
                    Email: verify.dataValues.email, 
                    Subject: "Your account was verified, Please Login to check account",
                    Template: "",
                    Body: ""
                }
                const sendMail = await this.sendMailRepository.sendMail(mailBody)
                return {
                    Status: true,
                    message: 'Verified User successfully...',
                    data: verify
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
    VerifyUserUseCase
}
