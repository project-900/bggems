"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceTypes = void 0;
const { DataTypes, Model } = require('sequelize');
class ReferenceTypes extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            ReferenceType: DataTypes.STRING,
            OrdNo: DataTypes.INTEGER,
            Status: DataTypes.STRING,
        }, {
            tableName: "ReferenceTypes",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.ReferenceTypes = ReferenceTypes;
