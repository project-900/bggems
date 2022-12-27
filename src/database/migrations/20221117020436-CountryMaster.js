'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('CountryMaster',
      {
        Id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        CountryName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        ShortName: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        Continent: {
          type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('CountryMaster');
  }
};
