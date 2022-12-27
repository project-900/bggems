"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "Verify", {
      type: Sequelize.ENUM('true', 'false'),
      defaultValue: 'false',
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "Verify");
  },
};
