"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const { DataTypes, Model } = require('sequelize');
class Users extends Model {
    static init(sequelize) {
        super.init({
            img_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            unique_id: DataTypes.STRING,
            img: DataTypes.STRING,
            publish: DataTypes.STRING
        }, {
            tableName: "clinic_images",
            sequelize
        });
    }
    static associate(models) {
    }
}
exports.Users = Users;
