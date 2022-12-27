"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginDetails = void 0;
const { DataTypes, Model } = require('sequelize');
class UserLoginDetails extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            UserId: DataTypes.UUID,
            Ip: DataTypes.STRING,
            Longitude: DataTypes.STRING,
            Latitude: DataTypes.STRING,
            Country: DataTypes.STRING,
            Region: DataTypes.STRING,
            City: DataTypes.STRING,
            Date: DataTypes.STRING,
            Time: DataTypes.STRING,
            DeviceType: DataTypes.STRING,
        }, {
            tableName: "UserLoginDetails",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.UserLoginDetails = UserLoginDetails;
