"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempRouter = void 0;
const express_1 = require("express");
// import { joiValidate } from "../helper/validate";
// import { verifyTokenForUser } from "../middleware/auth";
// import { userSchema } from "../middleware/routesValidator/user.validate";
const SendMail_1 = require("../modules/Services/SendMail/useCase/SendMail");
const tempRouter = (0, express_1.Router)();
exports.tempRouter = tempRouter;
tempRouter.get('/send_mail', (request, response) => {
    SendMail_1.sendMailController.handle(request, response);
});
