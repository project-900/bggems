import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{ 
    Token: string
}

class VerifyTokenUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}
    async execute({ Token }: IRequests):Promise<any>{
        try{
            const VerifyToken = await this.userAuthRepository.verifyToken({ Token })
            if(VerifyToken == null){
                return {
                    Status: false,
                    message: 'Token expires please try again later...',
                    data: {}
                };
            }else{
                return {
                    Status: true,
                    message: 'Token verify successfully...',
                    data: VerifyToken
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
    VerifyTokenUseCase
}