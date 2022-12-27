'use strict';

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('VerificationTokens',
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
        Email: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        Token: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        Date: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        Time: {
          type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('VerificationTokens');
  }
};
