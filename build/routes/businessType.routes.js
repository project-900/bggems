"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessTypeRouter = void 0;
const express_1 = require("express");
const GetBusinessTypes_1 = require("../modules/admin/BusinessType/useCase/GetBusinessTypes");
const AddBusinessTypes_1 = require("../modules/admin/BusinessType/useCase/AddBusinessTypes");
const businessTypeRouter = (0, express_1.Router)();
exports.businessTypeRouter = businessTypeRouter;
businessTypeRouter.get('/get-business-types', (request, response) => {
    GetBusinessTypes_1.getBusinessTypesController.handle(request, response);
});
businessTypeRouter.post('/add-business-type', (request, response) => {
    AddBusinessTypes_1.addBusinessTypesController.handle(request, response);
});
