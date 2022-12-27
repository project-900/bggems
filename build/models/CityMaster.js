"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityMaster = void 0;
const { DataTypes, Model } = require('sequelize');
class CityMaster extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            CityName: DataTypes.UUID,
            CountryId: DataTypes.UUID,
            RegionId: DataTypes.STRING,
            TimeZone: DataTypes.STRING,
            Status: DataTypes.STRING,
        }, {
            tableName: "CityMaster",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.CityMaster = CityMaster;
