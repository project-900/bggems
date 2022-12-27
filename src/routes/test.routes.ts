import { Router } from "express";
import { joiValidate } from "../helper/validate";
import { verifyTokenForUser } from "../middleware/auth";
import { userSchema } from "../middleware/routesValidator/user.validate";
import { sendMailController } from "../modules/Services/SendMail/useCase/SendMail";

const tempRouter = Router();

tempRouter.get('/send_mail', (request, response)=>{
    sendMailController.handle(request, response);
})

export {
    tempRouter
}