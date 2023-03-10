"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityController = void 0;
const Locations_1 = require("../../repository/implementations/Locations");
const GetCityController_1 = require("./GetCityController");
const GetCityUseCases_1 = require("./GetCityUseCases");
const locationRepository = new Locations_1.LocationRepository();
const getCityUseCase = new GetCityUseCases_1.GetCityUseCase(locationRepository);
const getCityController = new GetCityController_1.GetCityController(getCityUseCase);
exports.getCityController = getCityController;
