"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailRouter = void 0;
const express_1 = require("express");
// import { joiValidate } from "../helper/validate";
// import { verifyTokenForUser } from "../middleware/auth";
// import { userSchema } from "../middleware/routesValidator/user.validate";
const SendMail_1 = require("../modules/Services/SendMail/useCase/SendMail");
const mailRouter = (0, express_1.Router)();
exports.mailRouter = mailRouter;
mailRouter.post('/send_mail', (request, response) => {
    SendMail_1.sendMailController.handle(request, response);
});
