import { LoginUseCase } from './loginUseCases';
import { Request, Response } from 'express';

class LoginController {
    constructor(public loginUseCase : LoginUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            Username,
            Password
        } = request.body;

        // const IP = "207.97.227.239";
        const IP = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null;

        const result = await this.loginUseCase.execute({Username, Password, IP});

        if(result.Status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    LoginController
}