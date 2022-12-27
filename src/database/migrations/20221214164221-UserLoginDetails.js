'use strict';

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('UserLoginDetails',
      {
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
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserLoginDetails');
  }
};
