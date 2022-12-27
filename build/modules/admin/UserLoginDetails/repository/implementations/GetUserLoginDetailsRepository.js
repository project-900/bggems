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
exports.UserLoginDetailRepository = void 0;
const UserLoginDetails_1 = require("../../../../../models/UserLoginDetails");
const moment_1 = __importDefault(require("moment"));
const UserRoles_1 = require("../../../../../models/UserRoles");
require('dotenv').config();
const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID;
const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
const TodayDate = (0, moment_1.default)().format('YYYY-MM-DD');
const currentTime = (0, moment_1.default)().format('HH:mm:ss');
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
class UserLoginDetailRepository {
    // Get all business types
    GetUserLoginDetails({ Skip, Limit, WhereClause }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserLoginDetails_1.UserLoginDetails.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                where: WhereClause,
                // offset: Skip,
                // limit: Limit
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
                return result;
            }
            else {
                return null;
            }
        });
    }
    // Add User login details
    AddUserLoginDetails({ UserId, Ip, Longitude, Latitude, Country, Region, City, Date, Time, DeviceType }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserLoginDetails_1.UserLoginDetails.create({
                UserId: UserId,
                Ip: Ip,
                Longitude: Longitude,
                Latitude: Latitude,
                Country: Country,
                Region: Region,
                City: City,
                Date: Date,
                Time: Time,
                DeviceType: DeviceType,
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
}
exports.UserLoginDetailRepository = UserLoginDetailRepository;
