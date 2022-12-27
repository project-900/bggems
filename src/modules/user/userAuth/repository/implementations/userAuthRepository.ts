import { IUserAuthRepository } from '../IUserAuthRepository';
import { Users } from '../../../../../models/Users';
import { BusinessTypes } from '../../../../../models/BusinessTypes';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { VerificationTokens } from '../../../../../models/VerificationTokens';
import { Roles } from '../../../../../models/Roles';
import { UserRoles } from '../../../../../models/UserRoles';

require('dotenv').config()
const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID

const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
// const TodayDate = moment().format('YYYY-MM-DD');
// const currentTime = moment().format('HH:mm:ss');
const bcrypt = require("bcrypt");
var crypto = require('crypto');
var base64url = require('base64url');

const LocalStrategy = require("passport-local").Strategy;

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

let currentDate = `${year}-${month}-${date}`; 
let currentTime = `${hours}:${minutes}:${seconds}`;
let FullDate = `${currentDate} ${currentTime}`;

class UserAuthRepository implements IUserAuthRepository {

    // Generate Token
    generateToken(loginUser: string): string {
        return jwt.sign({ loginUser }, authConfig.secret, {
            expiresIn: 86400,
        })
    }

    // login user
    async login({ Username }: any): Promise<any> {       
        const result:any = await Users.findOne({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: {
                [Op.or]: [
                    {
                        Email: Username,
                    },
                    {
                        Username: Username,
                    }
                ],
            }
        });
        
        if (result) {
            const UserRole = await UserRoles.findOne({
                where: {
                    UserId: result.dataValues.Id
                }
            })
            if(UserRole.dataValues.RoleId==ADMIN_ROLE_ID){
                result.dataValues.IsAdmin = true;
            }else{
                result.dataValues.IsAdmin = false;
            }

            const token = await this.generateToken(result);
            result.Token = token;
            return result
        } else {
            return null
        }
    }
    
    // User Registration
    async registration({ FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image }: any): Promise<any> {
        try{
            
            const addUser = await Users.create({
                FirstName: FirstName,
                LastName: LastName,
                Username: Username,
                Email: Email, 
                // Password: Password, 
                Password: await this.encryptPassword({Password}), 
                CountryCode: CountryCode, 
                MobileNo: MobileNo, 
                BusinessTypeId: BusinessTypeId, 
                CompanyName: CompanyName, 
                CompanyAddress: CompanyAddress, 
                OfficePhoneCountryCode: OfficePhoneCountryCode,
                OfficePhoneNumber: OfficePhoneNumber,
                CountryId: CountryId, 
                RegionId: RegionId, 
                CityId: CityId, 
                ZipCode: ZipCode, 
                ReferenceId: ReferenceId, 
                SalesPersonId: SalesPersonId,
                Image: Image,
                Status:'pending', // active, inactive
                Verify:'false' // true, false
            });
            if (addUser) {
                return addUser
            } else {
                return null
            }

        }catch(err){
            return {err}
        }
    }

    async createUserRole({ UserId, RoleId }: any): Promise<any> {
        const result = await UserRoles.create({
            UserId: UserId,
            RoleId: RoleId
        });
        if (result) {
            return result
        } else {
            return null
        }
    }

    async findUser({ UserId }: any): Promise<any> {
        console.log({UserId});
        
        const result = await Users.findOne({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: {
                Id: UserId
            }
        });
        if (result) {
            return result
        } else {
            return null
        }
    }

    async findUsername({ Username }: any): Promise<any> {
        const result = await Users.findOne({
            where: {
                Username: Username
            }
        });
        if (result) {
            return result
        } else {
            return null
        }
    }

    async findEmailUser({ Email }: any): Promise<any> {
        const result = await Users.findOne({
            where: {
                Email: Email,
            }
        });
        if (result) {
            return result
        } else {
            return null
        }
    }

    // forgot Password mail
    async forgotPasswordRequest({ Email }: any): Promise<any> {
        const result = await Users.findOne({
            where: {
                Email: Email,
            },
        });
        
        if (result) {
            const TokenGenerate = await VerificationTokens.create({
                UserId: result.dataValues.Id,
                Email: result.dataValues.Email,
                Token: base64url(crypto.randomBytes(64)),
                Date: currentDate,
                Time: currentTime,
                Status: 'active',
            });
            return TokenGenerate
        } else {
            return null
        }
    }

    // Verify token
    async verifyToken({ Token }: any): Promise<any> {

        const TokenVerify = await VerificationTokens.findOne({
            where: {
                Token: Token,
                Date: currentDate,
                Time: {
                    [Op.gte]: moment(FullDate).subtract(5, 'minutes').format('HH:mm:ss')
                },
                Status: 'active',
            }
        });
        if (TokenVerify) {
            const UserDetail = await Users.findOne({
                where: {
                    Email: TokenVerify.Email
                }
            });
            if(UserDetail){
                return UserDetail
            } else {
                return null
            }
        } else {
            return null
        }
    }
    
    // forgot Password
    async resetPassword({ Token, Password }: any): Promise<any> {
        const TokenVerify = await VerificationTokens.findOne({
            where: {
                Token: Token,
                Date: currentDate,
            }
        });

        if(TokenVerify){
            const result = await Users.update({
                Password: Password
            }, {
                where: {
                    Email: TokenVerify.Email,
                },
            });
    
            if (result) {
                return result
            } else {
                return null
            }   
        } else {
            return null
        }
    }

    // Encrypt Password
    async encryptPassword({ Password }: any): Promise<any> {
        const result = await bcrypt.hashSync(Password, 12);
        if (result) {
            return result
        } else {
            return null
        }
    }

    // Encrypt Password
    async verifyUser({ UserId, Verify }: any): Promise<any> {

        console.log({ UserId, Verify });

        const result = await Users.update({
            Verify: Verify
        },{
            where : {
                Id: UserId
            }
        });
        if (result) {
            const user = await Users.findOne({
                where : {
                    Id: UserId,
                    Verify: Verify
                }
            });
            return user
        } else {
            return null
        }
    }


}

export {
    UserAuthRepository
}