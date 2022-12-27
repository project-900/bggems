import { Router } from "express";
import { joiValidate } from "../helper/validate";
import { verifyTokenForUser } from "../middleware/auth";
import { userSchema } from "../middleware/routesValidator/user.validate";
import { loginController } from "../modules/user/userAuth/useCase/Login";
import { getBusinessTypesController } from "../modules/admin/BusinessType/useCase/GetBusinessTypes";
import { addBusinessTypesController } from "../modules/admin/BusinessType/useCase/AddBusinessTypes";

const businessTypeRouter = Router();

// userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
businessTypeRouter.get('/get-business-types', (request, response)=>{
    getBusinessTypesController.handle(request, response);
})

businessTypeRouter.post('/add-business-type', (request, response)=>{
    addBusinessTypesController.handle(request, response);
})

export { businessTypeRouter }