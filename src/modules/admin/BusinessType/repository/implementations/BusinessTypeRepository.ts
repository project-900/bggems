import { IBusinessTypeRepository } from '../IBusinessTypeRepository';
import { BusinessTypes } from '../../../../../models/BusinessTypes';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { Sequelize } from 'sequelize';

const { Op } = require('sequelize');
const TodayDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

class BusinessTypeRepository implements IBusinessTypeRepository {

    // Get all business types
    async getBusinessTypes({ Status }: any): Promise<any> {
        let whereClause = {}
        if(Status == 'active'){
            whereClause = { Status : Status }
        }
        const result = await BusinessTypes.findAll({
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

    // Add all business types
    async findBusinessType({ BusinessType }: any): Promise<any> {

        const result = await BusinessTypes.findOne({
            where : {
                BusinessType: BusinessType,
            }
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all business types
    async addBusinessTypes({ BusinessType, Status }: any): Promise<any> {

        const count = await BusinessTypes.findAll({
            attributes: [
                [Sequelize.fn('count', Sequelize.col('Id')), 'count']
            ]
        });
        
        const result = await BusinessTypes.create({
            BusinessType: BusinessType,
            OrdNo: count.length > 0 ? count[0].dataValues.count+1 : 0,
            Status: Status
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all business types
    async deleteBusinessType({ BusinessTypeId }: any): Promise<any> {

        const result = await BusinessTypes.destroy({
            where: {
                Id: BusinessTypeId,
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
    BusinessTypeRepository
}