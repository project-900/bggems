import moment from 'moment';
import { Request, Response } from 'express';


const connection = require('../../database/index');

class UserAuthRepository{

    // login user
    async temp(request: Request, response: Response): Promise<any> {

        const data = connection.query("SELECT * FROM users");
        if(data){
            return response.send(data)
        }else{
            return response.send({
                message: 'no data found...'
            })
        }
    }
}

export {
    UserAuthRepository
}
