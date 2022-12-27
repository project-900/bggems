'use strict';

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('Roles',
      {
        Id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        RoleName: {
          type: Sequelize.STRING(50),
          allowNull: false,
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
    await queryInterface.dropTable('Roles');
  }
};
