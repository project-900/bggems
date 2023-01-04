"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesPersonRouter = void 0;
const express_1 = require("express");
// import { joiValidate } from "../helper/validate";
// import { verifyTokenForUser } from "../middleware/auth";
// import { userSchema } from "../middleware/routesValidator/user.validate";
// import { loginController } from "../modules/user/userAuth/useCase/Login";
const GetSalesPersons_1 = require("../modules/admin/SalesPerson/useCase/GetSalesPersons");
const AddSalesPerson_1 = require("../modules/admin/SalesPerson/useCase/AddSalesPerson");
const salesPersonRouter = (0, express_1.Router)();
exports.salesPersonRouter = salesPersonRouter;
salesPersonRouter.get('/get-sales-persons', (request, response) => {
    GetSalesPersons_1.getSalesPersonsController.handle(request, response);
});
salesPersonRouter.post('/add-sales-person', (request, response) => {
    AddSalesPerson_1.addSalesPersonsController.handle(request, response);
});
