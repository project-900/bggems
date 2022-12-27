"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const { DataTypes, Model } = require('sequelize');
class Users extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            FirstName: DataTypes.STRING,
            LastName: DataTypes.STRING,
            Username: DataTypes.STRING,
            Email: DataTypes.STRING,
            Password: DataTypes.STRING,
            CountryCode: DataTypes.STRING,
            MobileNo: DataTypes.STRING,
            BusinessTypeId: DataTypes.UUID,
            CompanyName: DataTypes.STRING,
            CompanyAddress: DataTypes.STRING,
            OfficePhoneCountryCode: DataTypes.STRING,
            OfficePhoneNumber: DataTypes.STRING,
            CountryId: DataTypes.UUID,
            RegionId: DataTypes.UUID,
            CityId: DataTypes.UUID,
            ZipCode: DataTypes.STRING,
            ReferenceId: DataTypes.UUID,
            SalesPersonId: DataTypes.UUID,
            Image: DataTypes.STRING,
            Verify: DataTypes.STRING,
            Status: DataTypes.STRING,
        }, {
            tableName: "Users",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.Users = Users;
