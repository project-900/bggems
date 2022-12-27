'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('CityMaster',
      {
        Id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        CityName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        CountryId: {
          type: Sequelize.UUID,
          allowNull: true,
        },
        RegionId: {
          type: Sequelize.UUID,
          allowNull: true,
        },
        TimeZone: {
          type: Sequelize.STRING(50),
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
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CityMaster');
  }
};
