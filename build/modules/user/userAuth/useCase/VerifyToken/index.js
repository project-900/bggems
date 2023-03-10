"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenController = void 0;
const UserAuthRepository_1 = require("../../repository/implementations/UserAuthRepository");
const VerifyTokenController_1 = require("./VerifyTokenController");
const VerifyTokenUseCases_1 = require("./VerifyTokenUseCases");
const userAuthRepository = new UserAuthRepository_1.UserAuthRepository();
const verifyTokenUseCase = new VerifyTokenUseCases_1.VerifyTokenUseCase(userAuthRepository);
const verifyTokenController = new VerifyTokenController_1.VerifyTokenController(verifyTokenUseCase);
exports.verifyTokenController = verifyTokenController;
