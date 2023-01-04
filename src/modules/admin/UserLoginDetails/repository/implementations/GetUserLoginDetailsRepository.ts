import { IUserLoginDetailRepository } from '../IGetUserLoginDetailsRepository';
import { UserLoginDetails } from '../../../../../models/UserLoginDetails';
import { UserRoles } from '../../../../../models/UserRoles';

require('dotenv').config()
const ADMIN_ROLE_ID = process.env.ADMIN_ROLE_ID

class UserLoginDetailRepository implements IUserLoginDetailRepository {

    // Get all business types
    async GetUserLoginDetails({ Skip, Limit, WhereClause }: any): Promise<any> {

        const result = await UserLoginDetails.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: WhereClause,
            // offset: Skip,
            // limit: Limit
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
            return result
        } else {
            return null
        }
    }

    // Add User login details
    async AddUserLoginDetails({ UserId, Ip, Longitude, Latitude, Country, Region, City, Date, Time, DeviceType }: any): Promise<any> {
        const result = await UserLoginDetails.create({
            UserId: UserId,
            Ip: Ip,
            Longitude: Longitude,
            Latitude: Latitude,
            Country: Country,
            Region: Region,
            City: City,
            Date: Date,
            Time: Time,
            DeviceType: DeviceType,
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

}

export {
    UserLoginDetailRepository
}
