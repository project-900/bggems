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
const moment_1 = __importDefault(require("moment"));
const { Op } = require('sequelize');
const TodayDate = (0, moment_1.default)().format('YYYY-MM-DD');
const currentTime = (0, moment_1.default)().format('HH:mm:ss');
const bcrypt = require("bcrypt");
const connection = require('../../database/index');
const LocalStrategy = require("passport-local").Strategy;
class UserAuthRepository {
    // login user
    temp(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = connection.query("SELECT * FROM users");
            if (data) {
                return response.send(data);
            }
            else {
                return response.send({
                    message: 'no data found...'
                });
            }
        });
    }
}
exports.UserAuthRepository = UserAuthRepository;
