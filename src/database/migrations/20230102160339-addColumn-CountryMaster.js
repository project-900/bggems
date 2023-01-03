"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("CountryMaster", "CountryCode", {
      type: Sequelize.STRING(5),
      defaultValue: null,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("CountryMaster", "CountryCode");
  },
};
