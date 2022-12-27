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
        yield queryInterface.createTable('Users', {
            Id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            FirstName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            LastName: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            Username: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            Email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                validate: {
                    isEmail: true,
                },
                unique: {
                    args: true,
                    msg: "The email has already been taken.",
                },
            },
            Password: {
                type: Sequelize.STRING(255),
                allowNull: false,
                set(value) {
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(value, salt);
                    this.setDataValue('Password', hash);
                },
            },
            CountryCode: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            MobileNo: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            BusinessTypeId: {
                type: Sequelize.UUID,
                allowNull: true,
            },
            CompanyName: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            CompanyAddress: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            OfficePhoneCountryCode: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            OfficePhoneNumber: {
                type: Sequelize.STRING(15),
                allowNull: true,
            },
            CountryId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            RegionId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            CityId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            ZipCode: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            ReferenceId: {
                type: Sequelize.UUID,
                allowNull: true,
            },
            SalesPersonId: {
                type: Sequelize.UUID,
                allowNull: true,
            },
            Image: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            Status: {
                type: DataTypes.STRING(20),
                defaultValue: 'pending', // active, inactive, pending, verified
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
        yield queryInterface.dropTable('Users');
    })
};
