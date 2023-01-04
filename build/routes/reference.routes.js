"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceTypeRouter = void 0;
const express_1 = require("express");
// import { joiValidate } from "../helper/validate";
// import { verifyTokenForUser } from "../middleware/auth";
// import { userSchema } from "../middleware/routesValidator/user.validate";
// import { loginController } from "../modules/user/userAuth/useCase/Login";
const GetReferenceTypes_1 = require("../modules/admin/ReferenceType/useCase/GetReferenceTypes");
const AddReferenceTypes_1 = require("../modules/admin/ReferenceType/useCase/AddReferenceTypes");
const ReferenceTypeRouter = (0, express_1.Router)();
exports.ReferenceTypeRouter = ReferenceTypeRouter;
ReferenceTypeRouter.get('/get-Reference-types', (request, response) => {
    GetReferenceTypes_1.getReferenceTypesController.handle(request, response);
});
ReferenceTypeRouter.post('/add-Reference-type', (request, response) => {
    AddReferenceTypes_1.addReferenceTypesController.handle(request, response);
});
