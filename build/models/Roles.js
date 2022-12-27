"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const { DataTypes, Model } = require('sequelize');
class Roles extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            RoleName: DataTypes.STRING,
            Status: DataTypes.STRING,
        }, {
            tableName: "Roles",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.Roles = Roles;
