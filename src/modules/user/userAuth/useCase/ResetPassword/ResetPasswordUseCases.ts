import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{
    Token: string, 
    Password: string
}

class ResetPasswordUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}
    async execute({ Token, Password }: IRequests):Promise<any>{
        try{
            const ResetPassword = await this.userAuthRepository.resetPassword({ Token, Password })
            if(ResetPassword == null){
                return {
                    Status: false,
                    message: 'Email does not exists...',
                    data: {}
                };
            }else{
                return {
                    Status: true,
                    message: 'Reset password mail send successfully...',
                    data: ResetPassword
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
    ResetPasswordUseCase
}