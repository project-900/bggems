'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('UserRoles',
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
        RoleId: {
          type: Sequelize.UUID,
          allowNull: false,
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
    await queryInterface.dropTable('UserRoles');
  }
};
