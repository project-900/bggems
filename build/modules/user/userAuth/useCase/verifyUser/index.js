"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserController = void 0;
const UserAuthRepository_1 = require("../../repository/implementations/UserAuthRepository");
const SendMailRepository_1 = require("../../../../Services/SendMail/repository/implementations/SendMailRepository");
const VerifyUserController_1 = require("./VerifyUserController");
const VerifyUserUseCases_1 = require("./VerifyUserUseCases");
const userAuthRepository = new UserAuthRepository_1.UserAuthRepository();
const sendMailRepository = new SendMailRepository_1.SendMailRepository();
const verifyUserUseCase = new VerifyUserUseCases_1.VerifyUserUseCase(userAuthRepository, sendMailRepository);
const verifyUserController = new VerifyUserController_1.VerifyUserController(verifyUserUseCase);
exports.verifyUserController = verifyUserController;
