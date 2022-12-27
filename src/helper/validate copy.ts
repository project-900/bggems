import { Request, Response, NextFunction } from "express";
require('dotenv').config();
const node_env = process.env.NODE_ENV;

const joiValidate = (schema: any) => {
    return (request: Request, response: Response, next: NextFunction) => {
        const { error } = schema.validate(request.body ? request.body : {});
        const valid = error == null;

        if(valid){
            next();
        }else{
            const message = error[0].message;

            // if(node_env == 'development'){
                response.status(422).json(
                    {
                        validationKey: null,
                        validationMessage: message,
                    },
                )
            // }else{

            // }
        }

    }
}