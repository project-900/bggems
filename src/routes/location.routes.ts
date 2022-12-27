import { Router } from "express";
import { joiValidate } from "../helper/validate";
import { verifyTokenForUser } from "../middleware/auth";
import { userSchema } from "../middleware/routesValidator/user.validate";

import { getCountryController } from '../modules/admin/Locations/useCase/GetCountry'
import { getCityController } from '../modules/admin/Locations/useCase/GetCity'
import { getRegionController } from '../modules/admin/Locations/useCase/GetRegion'

import { addCityController } from '../modules/admin/Locations/useCase/AddCity'
import { addCountryController } from '../modules/admin/Locations/useCase/AddCountry'
import { addRegionController } from '../modules/admin/Locations/useCase/AddRegion'

const locationRouter = Router();

// userAuthRouter.post('/login', joiValidate(userSchema.login), (request, response)=>{
locationRouter.get('/get-countries', (request, response)=>{
    getCountryController.handle(request, response);
})

locationRouter.get('/get-cities', (request, response)=>{
    getCityController.handle(request, response);
})

locationRouter.get('/get-regions', (request, response)=>{
    getRegionController.handle(request, response);
})


locationRouter.post('/add-country', (request, response)=>{
    addCountryController.handle(request, response);
})
locationRouter.post('/add-city', (request, response)=>{
    addCityController.handle(request, response);
})
locationRouter.post('/add-region', (request, response)=>{
    addRegionController.handle(request, response);
})

export {
    locationRouter
}