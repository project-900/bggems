import { Request, Response } from 'express';

require('dotenv').config()

const MAIL = process.env.MAIL;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
const MAIL_SERVICE = process.env.MAIL_SERVICE;
import nodemailer from 'nodemailer';

class UserAuthRepository {

    // Login user
    async temp(request: Request, response: Response): Promise<any> {

        var transporter = nodemailer.createTransport({
            service: MAIL_SERVICE,
            auth: {
                user: MAIL,
                pass: MAIL_PASSWORD
            }
        });

        var mailOptions = {
            from: MAIL,
            to: 'saikiran7202@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            return response.send(info)
        });
    }
}

export {
    UserAuthRepository
}
