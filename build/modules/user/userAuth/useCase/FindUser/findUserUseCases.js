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
exports.FindUserUseCase = void 0;
class FindUserUseCase {
    constructor(userAuthRepository) {
        this.userAuthRepository = userAuthRepository;
    }
    execute({ UserId }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const FindUser = yield this.userAuthRepository.findUser({ UserId });
                if (FindUser == null) {
                    return {
                        Status: false,
                        message: 'User is available...',
                        data: {}
                    };
                }
                else {
                    FindUser.Password = "";
                    return {
                        Status: true,
                        message: 'User is not available...',
                        data: FindUser
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
exports.FindUserUseCase = FindUserUseCase;
