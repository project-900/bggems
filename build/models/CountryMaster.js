"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryMaster = void 0;
const { DataTypes, Model } = require('sequelize');
class CountryMaster extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            CountryName: DataTypes.STRING,
            ShortName: DataTypes.STRING,
            Continent: DataTypes.STRING,
            Status: DataTypes.STRING,
        }, {
            tableName: "CountryMaster",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.CountryMaster = CountryMaster;
