"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordRequestController = void 0;
const SendMailRepository_1 = require("../../../../Services/SendMail/repository/implementations/SendMailRepository");
const UserAuthRepository_1 = require("../../repository/implementations/UserAuthRepository");
const forgotPasswordRequestController_1 = require("./forgotPasswordRequestController");
const forgotPasswordRequestUseCases_1 = require("./forgotPasswordRequestUseCases");
const userAuthRepository = new UserAuthRepository_1.UserAuthRepository();
const sendMailRepository = new SendMailRepository_1.SendMailRepository();
const forgotPasswordRequestUseCase = new forgotPasswordRequestUseCases_1.ForgotPasswordRequestUseCase(userAuthRepository, sendMailRepository);
const forgotPasswordRequestController = new forgotPasswordRequestController_1.ForgotPasswordRequestController(forgotPasswordRequestUseCase);
exports.forgotPasswordRequestController = forgotPasswordRequestController;
