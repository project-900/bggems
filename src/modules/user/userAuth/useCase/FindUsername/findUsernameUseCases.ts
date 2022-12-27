import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{ 
    Username: string
}

class FindUsernameUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}

    async execute({ Username }: IRequests):Promise<any>{
        try{
        const FindUsername = await this.userAuthRepository.findUsername({ Username })
        if(FindUsername == null){
            return {
                Status: false,
                message: 'Username is available...',
                data: {}
            };
        }else{
            return {
                Status: true,
                message: 'Username is not available...',
                data: FindUsername
            };
        }
    }catch {
        return {
            Status: false,
            message: 'Something went wrong, Please try again later...',
            data: {}
        };                
    }        

    };

}

export {
    FindUsernameUseCase
}