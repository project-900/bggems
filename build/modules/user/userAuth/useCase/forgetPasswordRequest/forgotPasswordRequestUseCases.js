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
exports.ForgotPasswordRequestUseCase = void 0;
require('dotenv').config();
const API_HOST = process.env.API_HOST;
class ForgotPasswordRequestUseCase {
    constructor(userAuthRepository, sendMailRepository) {
        this.userAuthRepository = userAuthRepository;
        this.sendMailRepository = sendMailRepository;
    }
    execute({ Email }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forgotPasswordRequest = yield this.userAuthRepository.forgotPasswordRequest({ Email });
                if (forgotPasswordRequest == null) {
                    return {
                        Status: false,
                        message: 'Email does not exists...',
                        data: {}
                    };
                }
                else {
                    let mail = {
                        Email,
                        Subject: 'You are requested to forgot password',
                        Template: `<div>
                        <p>
                            Hi Saikiran
                            </br> 
                            Forgot your password?
                            There was a request to change your password!
                            If you did not make this request then please ignore this email.
                            </br> 
                            Otherwise, please click this link to change your password
                        </p>
                        <a href="/#/new-password/${forgotPasswordRequest.Token}">
                            <button >Verify Token</button>
                        </a>
                    </div>`,
                        Body: `Token is valid for 5 min only... /#/new-password/${forgotPasswordRequest.Token}`
                    };
                    const sendMail = yield this.sendMailRepository.sendMail(mail);
                    return {
                        Status: true,
                        message: 'Forgot Password Request send to your mail successfully...',
                        data: {},
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
exports.ForgotPasswordRequestUseCase = ForgotPasswordRequestUseCase;
