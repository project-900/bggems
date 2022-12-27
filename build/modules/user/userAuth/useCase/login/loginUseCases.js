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
exports.LoginUseCase = void 0;
const bcrypt_1 = require("bcrypt");
var geoip = require('geoip-lite');
const CurrentDate = new Date().toISOString().slice(0, 10);
const CurrentTime = new Date().toLocaleString(undefined, { hour12: false, minute: '2-digit', second: '2-digit' });
class LoginUseCase {
    constructor(UserAuthRepository, UserLoginDetailRepository) {
        this.UserAuthRepository = UserAuthRepository;
        this.UserLoginDetailRepository = UserLoginDetailRepository;
    }
    execute({ Username, Password, IP }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const login = yield this.UserAuthRepository.login({ Username });
                if (login == null) {
                    return {
                        Status: false,
                        message: 'Incorrect username...',
                        data: {}
                    };
                }
                else {
                    const verify = yield (0, bcrypt_1.compare)(Password, login.Password);
                    if (!verify) {
                        return {
                            Status: false,
                            message: 'Incorrect password...',
                            data: {}
                        };
                    }
                    var geo = yield geoip.lookup(IP);
                    const LoginLocation = {
                        UserId: login.Id,
                        Ip: IP,
                        Longitude: (geo === null || geo === void 0 ? void 0 : geo.longitude) ? geo.longitude : '27.542554',
                        Latitude: (geo === null || geo === void 0 ? void 0 : geo.longitude) ? geo.longitude : '73.542554',
                        Country: 'India',
                        Region: 'Gujarat',
                        City: 'Surat',
                        Date: CurrentDate,
                        Time: CurrentTime,
                        DeviceType: 'web'
                    };
                    const locationSave = yield this.UserLoginDetailRepository.AddUserLoginDetails(LoginLocation);
                    return {
                        Status: true,
                        message: 'Login Successfully...',
                        data: login.Token
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
exports.LoginUseCase = LoginUseCase;
