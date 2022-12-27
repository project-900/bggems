import { IReferenceTypeRepository } from '../IReferenceTypeRepository';
import { ReferenceTypes } from '../../../../../models/ReferenceTypes';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { Sequelize } from 'sequelize';

const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
const TodayDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

class ReferenceTypeRepository implements IReferenceTypeRepository {

    // Get all Reference types
    async getReferenceTypes({ Status }: any): Promise<any> {
        let whereClause = {}
        if(Status == 'active'){
            whereClause = { Status: Status } 
        } 
        const result = await ReferenceTypes.findAll({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: whereClause,
            order: [['OrdNo', 'asc']]
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all Reference types
    async findReferenceType({ ReferenceType }: any): Promise<any> {

        const result = await ReferenceTypes.findOne({
            where : {
                ReferenceType: ReferenceType,
            }
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all Reference types
    async addReferenceTypes({ ReferenceType, Status }: any): Promise<any> {

        const count = await ReferenceTypes.findAll({
            attributes: [
                [Sequelize.fn('count', Sequelize.col('Id')), 'count']
            ]
        });
        
        const result = await ReferenceTypes.create({
            ReferenceType: ReferenceType,
            OrdNo: count.length > 0 ? count[0].dataValues.count+1 : 0,
            Status: Status
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all Reference types
    async deleteReferenceType({ ReferenceTypeId }: any): Promise<any> {

        const result = await ReferenceTypes.destroy({
            where: {
                Id: ReferenceTypeId,
            }
        });

        if (result) {
            return result
        } else {
            return null
        }
    }


}

export {
    ReferenceTypeRepository
}