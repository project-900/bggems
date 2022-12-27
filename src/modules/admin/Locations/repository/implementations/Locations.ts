import { ILocationRepository } from '../ILocations';
import { Users } from '../../../../../models/Users';
import { BusinessTypes } from '../../../../../models/BusinessTypes';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { CityMaster } from '../../../../../models/CityMaster';
import { RegionMaster } from '../../../../../models/RegionMaster';
import { CountryMaster } from '../../../../../models/CountryMaster';

const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
const TodayDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');
const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;

class LocationRepository implements ILocationRepository {

    // Get all business types
    async getCountries({ Status }: any): Promise<any> {

        let whereClause:any = {}
        if(Status != null){
            whereClause.Status = Status
        }
        const result = await CountryMaster.findAll({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: whereClause
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // get all cities
    async getCities({ Status, CountryId, RegionId }: any): Promise<any> {
        let whereClause:any = {}
        if(Status != null){
            whereClause.Status = Status
        }
        if(RegionId != null){
            whereClause.RegionId = RegionId
        }
        if(CountryId != null){
            whereClause.CountryId = CountryId
        }

        const result = await CityMaster.findAll({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: whereClause
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // get all regions
    async getRegions({ Status, CountryId }: any): Promise<any> {
        let whereClause:any = {}
        if(Status != null){
            whereClause.Status = Status
        }
        if(CountryId != null){
            whereClause.CountryId = CountryId
        }

        const result = await RegionMaster.findAll({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: whereClause
        });

        if (result) {
            return result
        } else {
            return null
        }
    }


    // Add new Region
    async AddRegions({ RegionName, ShortName, CountryId }: any): Promise<any> {

        const find = await RegionMaster.findOne({
            where : {
                RegionName: RegionName, 
                ShortName: ShortName, 
                CountryId: CountryId
            }
        });
        if(find){
            return {
                error: 'exists'
            }
        }else{
            const result = await RegionMaster.create({
                RegionName: RegionName, 
                ShortName: ShortName, 
                CountryId: CountryId,
                Status: 'active'
            });
    
            if (result) {
                return result
            } else {
                return null
            }
        }

    }

    // Add new country
    async AddCountries({ CountryName, ShortName, Continent }: any): Promise<any> {

        const find = await CountryMaster.findOne({
            where : {
                CountryName: CountryName, 
                ShortName: ShortName, 
                Continent: Continent
            }
        });
        
        if(find){
            return {
                error: 'exists'
            }
        }else{
            const result = await CountryMaster.create({
                CountryName: CountryName, 
                ShortName: ShortName, 
                Continent: Continent,
                Status: 'active'
            });
    
            if (result) {
                return result
            } else {
                return null
            }
        }

    }

    // Add new city
    async AddCities({ CityName, CountryId, RegionId, TimeZone }: any): Promise<any> {

        const find = await CityMaster.findOne({
            where : {
                CityName: CityName, 
                CountryId: CountryId, 
                RegionId: RegionId, 
                TimeZone: TimeZone
            }
        });
        
        if(find){
            return {
                error: 'exists'
            }
        }else{
            const result = await CityMaster.create({
                CityName: CityName, 
                CountryId: CountryId, 
                RegionId: RegionId, 
                TimeZone: TimeZone,
                Status: 'active'
            });
    
            if (result) {
                return result
            } else {
                return null
            }
        }

    }


}

export {
    LocationRepository
}