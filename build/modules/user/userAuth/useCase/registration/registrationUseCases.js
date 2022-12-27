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
exports.RegistrationUseCase = void 0;
// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const USER_ROLE_ID = process.env.USER_ROLE_ID;
class RegistrationUseCase {
    constructor(userAuthRepository, sendMailRepository) {
        this.userAuthRepository = userAuthRepository;
        this.sendMailRepository = sendMailRepository;
    }
    execute({ FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checkEmail = yield this.userAuthRepository.findEmailUser({ Email });
                if (checkEmail) {
                    return {
                        Status: false,
                        message: 'Email is already exists...',
                        data: {}
                    };
                }
                const checkUsername = yield this.userAuthRepository.findUsername({ Username });
                if (checkUsername) {
                    return {
                        Status: false,
                        message: 'Username is already exists, Please choose another username...',
                        data: {}
                    };
                }
                const Registration = yield this.userAuthRepository.registration({ FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image });
                if (Registration == null) {
                    return {
                        Status: false,
                        message: 'Registration failed, Please try again later...',
                        data: {}
                    };
                }
                else {
                    let roleData = {
                        UserId: Registration.Id,
                        RoleId: USER_ROLE_ID
                    };
                    const CreateRole = yield this.userAuthRepository.createUserRole(roleData);
                    return {
                        Status: true,
                        message: 'Registration successfully...',
                        data: Registration
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
exports.RegistrationUseCase = RegistrationUseCase;
