import moment from 'moment';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const { Op } = require('sequelize');
const TodayDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');
const bcrypt = require("bcrypt");

const connection = require('../../database/index');
const LocalStrategy = require("passport-local").Strategy;

class UserAuthRepository{

    // login user
    async temp(request: Request, response: Response): Promise<any> {

        const data = connection.query("SELECT * FROM users");
        if(data){
            return response.send(data)
        }else{
            return response.send({
                message: 'no data found...'
            })
        }
    }
}

export {
    UserAuthRepository
}