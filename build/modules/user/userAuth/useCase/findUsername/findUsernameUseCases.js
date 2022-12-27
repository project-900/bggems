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
exports.FindUsernameUseCase = void 0;
class FindUsernameUseCase {
    constructor(userAuthRepository) {
        this.userAuthRepository = userAuthRepository;
    }
    execute({ Username }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const FindUsername = yield this.userAuthRepository.findUsername({ Username });
                if (FindUsername == null) {
                    return {
                        Status: false,
                        message: 'Username is available...',
                        data: {}
                    };
                }
                else {
                    return {
                        Status: true,
                        message: 'Username is not available...',
                        data: FindUsername
                    };
                }
            }
            catch (_a) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: {}
                };
            }
        });
    }
    ;
}
exports.FindUsernameUseCase = FindUsernameUseCase;
