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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthRepository = void 0;
const Users_1 = require("../../../../../models/Users");
const moment_1 = __importDefault(require("moment"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerificationTokens_1 = require("../../../../../models/VerificationTokens");
const UserRoles_1 = require("../../../../../models/UserRoles");
require('dotenv').config();
const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID;
const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
// const TodayDate = moment().format('YYYY-MM-DD');
// const currentTime = moment().format('HH:mm:ss');
const bcrypt = require("bcrypt");
var crypto = require('crypto');
var base64url = require('base64url');
const LocalStrategy = require("passport-local").Strategy;
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let currentDate = `${year}-${month}-${date}`;
let currentTime = `${hours}:${minutes}:${seconds}`;
let FullDate = `${currentDate} ${currentTime}`;
class UserAuthRepository {
    // Generate Token
    generateToken(loginUser) {
        return jsonwebtoken_1.default.sign({ loginUser }, authConfig.secret, {
            expiresIn: 86400,
        });
    }
    // login user
    login({ Username }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Users_1.Users.findOne({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: {
                    [Op.or]: [
                        {
                            Email: Username,
                        },
                        {
                            Username: Username,
                        }
                    ],
                }
            });
            if (result) {
                const UserRole = yield UserRoles_1.UserRoles.findOne({
                    where: {
                        UserId: result.dataValues.Id
                    }
                });
                if (UserRole.dataValues.RoleId == ADMIN_ROLE_ID) {
                    result.dataValues.IsAdmin = true;
                }
                else {
                    result.dataValues.IsAdmin = false;
                }
                const token = yield this.generateToken(result);
                result.Token = token;
                return result;
            }
            else {
                return null;
            }
        });
    }
    // User Registration
    registration({ FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addUser = yield Users_1.Users.create({
                    FirstName: FirstName,
                    LastName: LastName,
                    Username: Username,
                    Email: Email,
                    // Password: Password, 
                    Password: yield this.encryptPassword({ Password }),
                    CountryCode: CountryCode,
                    MobileNo: MobileNo,
                    BusinessTypeId: BusinessTypeId,
                    CompanyName: CompanyName,
                    CompanyAddress: CompanyAddress,
                    OfficePhoneCountryCode: OfficePhoneCountryCode,
                    OfficePhoneNumber: OfficePhoneNumber,
                    CountryId: CountryId,
                    RegionId: RegionId,
                    CityId: CityId,
                    ZipCode: ZipCode,
                    ReferenceId: ReferenceId,
                    SalesPersonId: SalesPersonId,
                    Image: Image,
                    Status: 'pending',
                    Verify: 'false' // true, false
                });
                if (addUser) {
                    return addUser;
                }
                else {
                    return null;
                }
            }
            catch (err) {
                return { err };
            }
        });
    }
    createUserRole({ UserId, RoleId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserRoles_1.UserRoles.create({
                UserId: UserId,
                RoleId: RoleId
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    findUser({ UserId }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ UserId });
            const result = yield Users_1.Users.findOne({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: {
                    Id: UserId
                }
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    findUsername({ Username }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Users_1.Users.findOne({
                where: {
                    Username: Username
                }
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    findEmailUser({ Email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Users_1.Users.findOne({
                where: {
                    Email: Email,
                }
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // forgot Password mail
    forgotPasswordRequest({ Email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Users_1.Users.findOne({
                where: {
                    Email: Email,
                },
            });
            if (result) {
                const TokenGenerate = yield VerificationTokens_1.VerificationTokens.create({
                    UserId: result.dataValues.Id,
                    Email: result.dataValues.Email,
                    Token: base64url(crypto.randomBytes(64)),
                    Date: currentDate,
                    Time: currentTime,
                    Status: 'active',
                });
                return TokenGenerate;
            }
            else {
                return null;
            }
        });
    }
    // Verify token
    verifyToken({ Token }) {
        return __awaiter(this, void 0, void 0, function* () {
            const TokenVerify = yield VerificationTokens_1.VerificationTokens.findOne({
                where: {
                    Token: Token,
                    Date: currentDate,
                    Time: {
                        [Op.gte]: (0, moment_1.default)(FullDate).subtract(5, 'minutes').format('HH:mm:ss')
                    },
                    Status: 'active',
                }
            });
            if (TokenVerify) {
                const UserDetail = yield Users_1.Users.findOne({
                    where: {
                        Email: TokenVerify.Email
                    }
                });
                if (UserDetail) {
                    return UserDetail;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        });
    }
    // forgot Password
    resetPassword({ Token, Password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const TokenVerify = yield VerificationTokens_1.VerificationTokens.findOne({
                where: {
                    Token: Token,
                    Date: currentDate,
                }
            });
            if (TokenVerify) {
                const result = yield Users_1.Users.update({
                    Password: Password
                }, {
                    where: {
                        Email: TokenVerify.Email,
                    },
                });
                if (result) {
                    return result;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        });
    }
    // Encrypt Password
    encryptPassword({ Password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield bcrypt.hashSync(Password, 12);
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // Encrypt Password
    verifyUser({ UserId, Verify }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ UserId, Verify });
            const result = yield Users_1.Users.update({
                Verify: Verify
            }, {
                where: {
                    Id: UserId
                }
            });
            if (result) {
                const user = yield Users_1.Users.findOne({
                    where: {
                        Id: UserId,
                        Verify: Verify
                    }
                });
                return user;
            }
            else {
                return null;
            }
        });
    }
}
exports.UserAuthRepository = UserAuthRepository;
