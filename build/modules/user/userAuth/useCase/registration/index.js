"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationController = void 0;
const SendMailRepository_1 = require("../../../../Services/SendMail/repository/implementations/SendMailRepository");
const UserAuthRepository_1 = require("../../repository/implementations/UserAuthRepository");
const registrationController_1 = require("./registrationController");
const registrationUseCases_1 = require("./registrationUseCases");
const userAuthRepository = new UserAuthRepository_1.UserAuthRepository();
const sendMailRepository = new SendMailRepository_1.SendMailRepository();
const registrationUseCase = new registrationUseCases_1.RegistrationUseCase(userAuthRepository, sendMailRepository);
const registrationController = new registrationController_1.RegistrationController(registrationUseCase);
exports.registrationController = registrationController;
