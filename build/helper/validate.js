"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiValidate = void 0;
require('dotenv').config();
const node_env = process.env.NODE_ENV;
const joiValidate = (schema) => {
    return (request, response, next) => {
        let { error } = schema.validate(request.body ? request.body : {});
        const valid = error == null;
        if (valid) {
            next();
        }
        else {
            const { details } = error;
            const message = details.map((i) => i.message).join(',');
            const key = details.map((i) => i.context.key).join(',');
            if (node_env === 'development') {
                response.status(422).json({
                    validationKey: key,
                    validationMessage: message,
                });
            }
            else {
                response.status(422).json({
                    validationKey: null,
                    validationMessage: 'Validation failed',
                });
            }
        }
    };
};
exports.joiValidate = joiValidate;
