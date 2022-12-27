"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokens = void 0;
const { DataTypes, Model } = require('sequelize');
class VerificationTokens extends Model {
    static init(sequelize) {
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            UserId: DataTypes.UUID,
            Email: DataTypes.STRING,
            Token: DataTypes.STRING,
            Date: DataTypes.STRING,
            Time: DataTypes.STRING,
            Status: DataTypes.STRING,
        }, {
            tableName: "VerificationTokens",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.VerificationTokens = VerificationTokens;
