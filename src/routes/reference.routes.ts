import { Router } from "express";
import { joiValidate } from "../helper/validate";
import { verifyTokenForUser } from "../middleware/auth";
import { userSchema } from "../middleware/routesValidator/user.validate";
import { loginController } from "../modules/user/userAuth/useCase/Login";
import { getReferenceTypesController } from "../modules/admin/ReferenceType/useCase/GetReferenceTypes";
import { addReferenceTypesController } from "../modules/admin/ReferenceType/useCase/AddReferenceTypes";

const ReferenceTypeRouter = Router();

// userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
ReferenceTypeRouter.get('/get-Reference-types', (request, response)=>{
    getReferenceTypesController.handle(request, response);
})

ReferenceTypeRouter.post('/add-Reference-type', (request, response)=>{
    addReferenceTypesController.handle(request, response);
})

export { ReferenceTypeRouter }