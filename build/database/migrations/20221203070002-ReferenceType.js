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
const bcrypt = require('bcrypt');
module.exports = {
    up: (queryInterface, { Sequelize, DataTypes }) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.createTable('ReferenceTypes', {
            Id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            ReferenceType: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            OrdNo: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            Status: {
                type: DataTypes.ENUM('active', 'inactive'),
                defaultValue: 'active',
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
        yield queryInterface.dropTable('ReferenceTypes');
    })
};
