import { ISendMailRepository } from '../../../../Services/SendMail/repository/ISendMailRepository';
import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{
    Email: string, 
}
require('dotenv').config();
const API_HOST = process.env.API_HOST;

class ForgotPasswordRequestUseCase {
    constructor(
        private userAuthRepository: IUserAuthRepository, 
        private sendMailRepository: ISendMailRepository 
    ){}

    async execute({ Email }: IRequests):Promise<any>{
        try{

            const forgotPasswordRequest = await this.userAuthRepository.forgotPasswordRequest({ Email })

            if(forgotPasswordRequest == null){
                return {
                    Status: false,
                    message: 'Email does not exists...',
                    data: {}
                };
            }else{
                let mail = { 
                    Email, 
                    Subject: 'You are requested to forgot password', 
                    Template:`<div>
                        <p>
                            Hi Saikiran
                            </br> 
                            Forgot your password?
                            There was a request to change your password!
                            If you did not make this request then please ignore this email.
                            </br> 
                            Otherwise, please click this link to change your password
                        </p>
                        <a href="/#/new-password/${forgotPasswordRequest.Token}">
                            <button >Verify Token</button>
                        </a>
                    </div>`, 
                    Body:`Token is valid for 5 min only... /#/new-password/${forgotPasswordRequest.Token}` 
                }
                const sendMail = await this.sendMailRepository.sendMail(mail)
                return {
                    Status: true,
                    message: 'Forgot Password Request send to your mail successfully...',
                    data: {},
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
    ForgotPasswordRequestUseCase
}