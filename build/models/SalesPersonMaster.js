"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPersonMaster = void 0;
const { DataTypes, Model } = require('sequelize');
class SalesPersonMaster extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            Name: DataTypes.STRING,
            ShortName: DataTypes.STRING,
            Status: DataTypes.STRING,
        }, {
            tableName: "SalesPersonMaster",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.SalesPersonMaster = SalesPersonMaster;
