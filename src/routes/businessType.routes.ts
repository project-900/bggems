import { Router } from "express";
import { getBusinessTypesController } from "../modules/admin/BusinessType/useCase/GetBusinessTypes";
import { addBusinessTypesController } from "../modules/admin/BusinessType/useCase/AddBusinessTypes";

const businessTypeRouter = Router();

businessTypeRouter.get('/get-business-types', (request, response)=>{
    getBusinessTypesController.handle(request, response);
})

businessTypeRouter.post('/add-business-type', (request, response)=>{
    addBusinessTypesController.handle(request, response);
})

export { businessTypeRouter }
