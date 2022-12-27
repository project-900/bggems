import { Router } from "express";
import { joiValidate } from "../helper/validate";
import { verifyTokenForUser } from "../middleware/auth";
import { userSchema } from "../middleware/routesValidator/user.validate";
import { loginController } from "../modules/user/userAuth/useCase/Login";
import { getSalesPersonsController } from "../modules/admin/SalesPerson/useCase/GetSalesPersons";
import { addSalesPersonsController } from "../modules/admin/SalesPerson/useCase/AddSalesPerson";

const salesPersonRouter = Router();

// userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
salesPersonRouter.get('/get-sales-persons', (request, response)=>{
    getSalesPersonsController.handle(request, response);
})

salesPersonRouter.post('/add-sales-person', (request, response)=>{
    addSalesPersonsController.handle(request, response);
})

export { salesPersonRouter }