import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{ 
    UserId: string
}

class FindUserUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}

    async execute({ UserId }: IRequests):Promise<any>{
        try{
        const FindUser = await this.userAuthRepository.findUser({ UserId })
        if(FindUser == null){
            return {
                Status: false,
                message: 'User is available...',
                data: {}
            };
        }else{
            FindUser.Password = ""
            return {
                Status: true,
                message: 'User is not available...',
                data: FindUser
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
    FindUserUseCase
}