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
exports.LocationRepository = void 0;
const moment_1 = __importDefault(require("moment"));
const CityMaster_1 = require("../../../../../models/CityMaster");
const RegionMaster_1 = require("../../../../../models/RegionMaster");
const CountryMaster_1 = require("../../../../../models/CountryMaster");
const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
const TodayDate = (0, moment_1.default)().format('YYYY-MM-DD');
const currentTime = (0, moment_1.default)().format('HH:mm:ss');
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
class LocationRepository {
    // Get all business types
    getCountries({ Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            let whereClause = {};
            if (Status != null) {
                whereClause.Status = Status;
            }
            const result = yield CountryMaster_1.CountryMaster.findAll({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: whereClause
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // get all cities
    getCities({ Status, CountryId, RegionId }) {
        return __awaiter(this, void 0, void 0, function* () {
            let whereClause = {};
            if (Status != null) {
                whereClause.Status = Status;
            }
            if (RegionId != null) {
                whereClause.RegionId = RegionId;
            }
            if (CountryId != null) {
                whereClause.CountryId = CountryId;
            }
            const result = yield CityMaster_1.CityMaster.findAll({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: whereClause
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // get all regions
    getRegions({ Status, CountryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            let whereClause = {};
            if (Status != null) {
                whereClause.Status = Status;
            }
            if (CountryId != null) {
                whereClause.CountryId = CountryId;
            }
            const result = yield RegionMaster_1.RegionMaster.findAll({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: whereClause
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // Add new Region
    AddRegions({ RegionName, ShortName, CountryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const find = yield RegionMaster_1.RegionMaster.findOne({
                where: {
                    RegionName: RegionName,
                    ShortName: ShortName,
                    CountryId: CountryId
                }
            });
            if (find) {
                return {
                    error: 'exists'
                };
            }
            else {
                const result = yield RegionMaster_1.RegionMaster.create({
                    RegionName: RegionName,
                    ShortName: ShortName,
                    CountryId: CountryId,
                    Status: 'active'
                });
                if (result) {
                    return result;
                }
                else {
                    return null;
                }
            }
        });
    }
    // Add new country
    AddCountries({ CountryName, ShortName, Continent }) {
        return __awaiter(this, void 0, void 0, function* () {
            const find = yield CountryMaster_1.CountryMaster.findOne({
                where: {
                    CountryName: CountryName,
                    ShortName: ShortName,
                    Continent: Continent
                }
            });
            if (find) {
                return {
                    error: 'exists'
                };
            }
            else {
                const result = yield CountryMaster_1.CountryMaster.create({
                    CountryName: CountryName,
                    ShortName: ShortName,
                    Continent: Continent,
                    Status: 'active'
                });
                if (result) {
                    return result;
                }
                else {
                    return null;
                }
            }
        });
    }
    // Add new city
    AddCities({ CityName, CountryId, RegionId, TimeZone }) {
        return __awaiter(this, void 0, void 0, function* () {
            const find = yield CityMaster_1.CityMaster.findOne({
                where: {
                    CityName: CityName,
                    CountryId: CountryId,
                    RegionId: RegionId,
                    TimeZone: TimeZone
                }
            });
            if (find) {
                return {
                    error: 'exists'
                };
            }
            else {
                const result = yield CityMaster_1.CityMaster.create({
                    CityName: CityName,
                    CountryId: CountryId,
                    RegionId: RegionId,
                    TimeZone: TimeZone,
                    Status: 'active'
                });
                if (result) {
                    return result;
                }
                else {
                    return null;
                }
            }
        });
    }
}
exports.LocationRepository = LocationRepository;
