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
exports.SendMailRepository = void 0;
const moment_1 = __importDefault(require("moment"));
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv').config();
const { Op } = require('sequelize');
const TodayDate = (0, moment_1.default)().format('YYYY-MM-DD');
const currentTime = (0, moment_1.default)().format('HH:mm:ss');
const MAIL = process.env.MAIL;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
const MAIL_SERVICE = process.env.MAIL_SERVICE;
class SendMailRepository {
    // Add all business types
    sendMail({ Email, Subject, Template, Body, }) {
        return __awaiter(this, void 0, void 0, function* () {
            var transporter = nodemailer_1.default.createTransport({
                service: MAIL_SERVICE,
                auth: {
                    user: MAIL,
                    pass: MAIL_PASSWORD
                }
            });
            var mailOptions = {
                from: MAIL,
                to: Email,
                subject: Subject,
                text: Body,
                html: Template,
                headers: { 'x-myheader': 'test header' }
            };
            yield transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    return null;
                }
                else {
                    console.log('Email sent: ' + info.response);
                    return info;
                }
            });
        });
    }
}
exports.SendMailRepository = SendMailRepository;
