"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyUserUseCase = void 0;
class VerifyUserUseCase {
    constructor(userAuthRepository, sendMailRepository) {
        this.userAuthRepository = userAuthRepository;
        this.sendMailRepository = sendMailRepository;
    }
    execute({ UserId, Verify }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verify = yield this.userAuthRepository.verifyUser({ UserId, Verify });
                if (verify == null) {
                    return {
                        Status: false,
                        message: 'Verify User failed, Please try again later...',
                        data: {}
                    };
                }
                else {
                    let mailBody = {
                        Email: verify.dataValues.email,
                        Subject: "Your account was verified, Please login to check account",
                        Template: "",
                        Body: ""
                    };
                    const sendMail = yield this.sendMailRepository.sendMail(mailBody);
                    return {
                        Status: true,
                        message: 'Verified User successfully...',
                        data: verify
                    };
                }
            }
            catch (_a) {
                return {
                    Status: false,
                    message: 'Something went wrong...',
                    data: {}
                };
            }
        });
    }
    ;
}
exports.VerifyUserUseCase = VerifyUserUseCase;
