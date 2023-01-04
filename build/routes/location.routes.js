"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRouter = void 0;
const express_1 = require("express");
// import { joiValidate } from "../helper/validate";
// import { verifyTokenForUser } from "../middleware/auth";
// import { userSchema } from "../middleware/routesValidator/user.validate";
const GetCountry_1 = require("../modules/admin/Locations/useCase/GetCountry");
const GetCity_1 = require("../modules/admin/Locations/useCase/GetCity");
const GetRegion_1 = require("../modules/admin/Locations/useCase/GetRegion");
const AddCity_1 = require("../modules/admin/Locations/useCase/AddCity");
const AddCountry_1 = require("../modules/admin/Locations/useCase/AddCountry");
const AddRegion_1 = require("../modules/admin/Locations/useCase/AddRegion");
const locationRouter = (0, express_1.Router)();
exports.locationRouter = locationRouter;
locationRouter.get('/get-countries', (request, response) => {
    GetCountry_1.getCountryController.handle(request, response);
});
locationRouter.get('/get-cities', (request, response) => {
    GetCity_1.getCityController.handle(request, response);
});
locationRouter.get('/get-regions', (request, response) => {
    GetRegion_1.getRegionController.handle(request, response);
});
locationRouter.post('/add-country', (request, response) => {
    AddCountry_1.addCountryController.handle(request, response);
});
locationRouter.post('/add-city', (request, response) => {
    AddCity_1.addCityController.handle(request, response);
});
locationRouter.post('/add-region', (request, response) => {
    AddRegion_1.addRegionController.handle(request, response);
});
