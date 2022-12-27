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
exports.ForgotPasswordUseCase = void 0;
class ForgotPasswordUseCase {
    constructor(userAuthRepository) {
        this.userAuthRepository = userAuthRepository;
    }
    execute({ email, user_id, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forgotPassword = yield this.userAuthRepository.forgotPassword({ email, user_id, password });
                if (forgotPassword == null) {
                    return {
                        Status: false,
                        message: 'Email does not exists...',
                        data: {}
                    };
                }
                else {
                    return {
                        Status: true,
                        message: 'Forgot password mail send successfully...',
                        data: forgotPassword
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
exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
