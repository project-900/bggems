"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessTypes = void 0;
const { DataTypes, Model } = require('sequelize');
class BusinessTypes extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            BusinessType: DataTypes.STRING,
            OrdNo: DataTypes.INTEGER,
            Status: DataTypes.STRING,
        }, {
            tableName: "BusinessTypes",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.BusinessTypes = BusinessTypes;
