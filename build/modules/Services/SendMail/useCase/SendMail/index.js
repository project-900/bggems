"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailController = void 0;
const SendMailRepository_1 = require("../../repository/implementations/SendMailRepository");
const SendMailController_1 = require("./SendMailController");
const SendMailUseCases_1 = require("./SendMailUseCases");
const sendMailRepository = new SendMailRepository_1.SendMailRepository();
const sendMailUseCase = new SendMailUseCases_1.SendMailUseCase(sendMailRepository);
const sendMailController = new SendMailController_1.SendMailController(sendMailUseCase);
exports.sendMailController = sendMailController;