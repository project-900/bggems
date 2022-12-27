import { ISendMailRepository } from '../ISendMailRepository';
import moment from 'moment';
import { Sequelize } from 'sequelize';
import nodemailer from 'nodemailer';

require('dotenv').config()
const { Op } = require('sequelize');
const TodayDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');
const MAIL = process.env.MAIL;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
const MAIL_SERVICE = process.env.MAIL_SERVICE;

class SendMailRepository implements ISendMailRepository {

    // Add all business types
    async sendMail({ Email, Subject, Template, Body, }: any): Promise<any> {

        var transporter = nodemailer.createTransport({
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

        await transporter.sendMail(mailOptions, function (error:any, info:any) {
            if (error) {
                console.log(error);
                return null
            } else {
                console.log('Email sent: ' + info.response);
                return info
            }
        });
    }

}

export {
    SendMailRepository
}