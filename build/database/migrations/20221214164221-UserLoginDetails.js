'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up: (queryInterface, { Sequelize, DataTypes }) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.createTable('UserLoginDetails', {
            Id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            UserId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            Ip: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            Longitude: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            Latitude: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            Country: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            Region: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            City: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            DeviceType: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            Date: {
                type: Sequelize.STRING(15),
                allowNull: true,
            },
            Time: {
                type: Sequelize.STRING(15),
                allowNull: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        });
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.dropTable('UserLoginDetails');
    })
};
