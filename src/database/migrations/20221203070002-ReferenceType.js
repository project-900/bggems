'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, { Sequelize, DataTypes }) => {

    await queryInterface.createTable('ReferenceTypes',
      {
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
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ReferenceTypes');
  }
};
