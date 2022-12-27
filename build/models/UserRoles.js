"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const { DataTypes, Model } = require('sequelize');
class UserRoles extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            UserId: DataTypes.UUID,
            RoleId: DataTypes.UUID,
        }, {
            tableName: "UserRoles",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.UserRoles = UserRoles;
