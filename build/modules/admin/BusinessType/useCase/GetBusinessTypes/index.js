"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBusinessTypesController = void 0;
const BusinessTypeRepository_1 = require("../../repository/implementations/BusinessTypeRepository");
const GetBusinessTypesController_1 = require("./GetBusinessTypesController");
const GetBusinessTypesUseCases_1 = require("./GetBusinessTypesUseCases");
const businessTypeRepository = new BusinessTypeRepository_1.BusinessTypeRepository();
const getBusinessTypesUseCase = new GetBusinessTypesUseCases_1.GetBusinessTypesUseCase(businessTypeRepository);
const getBusinessTypesController = new GetBusinessTypesController_1.GetBusinessTypesController(getBusinessTypesUseCase);
exports.getBusinessTypesController = getBusinessTypesController;
