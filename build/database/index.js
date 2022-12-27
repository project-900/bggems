"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
// const DB_CONFIG = require("../config/database");
const DB_CONFIG = require("../config/database.js");
const Sequelize = require("sequelize");
const connection = new Sequelize(DB_CONFIG);
// const connection = new Sequelize('bggems', 'SA', 'OPTICAL', {
//   host: 'localhost',
//   port: 1433,
//   dialect: 'mssql',
//   driver: "msnodesqlv8",
//   dialectOptions: {
//     connectionString: 'Server=localhost;Database=BGDim;User Id=Clv;Password=Clv;Trusted_Connection=yes;Driver={SQL Server Native Client 11.0};',
//     instanceName: "SQLEXPRESS",
//     trustedConnection: true,
//   },
//   options: {
//     encrypt: false,
//     enableArithAbort: false,
//     trustServerCertificate: false,
//   },
// })
connection.authenticate().then(() => {
    console.log({ 'Connection has been established successfully................': '' });
}).catch((error) => {
    console.error({ 'Unable to connect to the database:............... ': error });
});
const Users_1 = require("../models/Users");
const BusinessTypes_1 = require("../models/BusinessTypes");
const CountryMaster_1 = require("../models/CountryMaster");
const RegionMaster_1 = require("../models/RegionMaster");
const CityMaster_1 = require("../models/CityMaster");
const SalesPersonMaster_1 = require("../models/SalesPersonMaster");
const VerificationTokens_1 = require("../models/VerificationTokens");
const ReferenceTypes_1 = require("../models/ReferenceTypes");
const Roles_1 = require("../models/Roles");
const UserRoles_1 = require("../models/UserRoles");
const UserLoginDetails_1 = require("../models/UserLoginDetails");
Users_1.Users.init(connection);
BusinessTypes_1.BusinessTypes.init(connection);
CountryMaster_1.CountryMaster.init(connection);
RegionMaster_1.RegionMaster.init(connection);
CityMaster_1.CityMaster.init(connection);
SalesPersonMaster_1.SalesPersonMaster.init(connection);
VerificationTokens_1.VerificationTokens.init(connection);
ReferenceTypes_1.ReferenceTypes.init(connection);
Roles_1.Roles.init(connection);
UserRoles_1.UserRoles.init(connection);
UserLoginDetails_1.UserLoginDetails.init(connection);
Users_1.Users.associate(connection.models);
BusinessTypes_1.BusinessTypes.associate(connection.models);
CountryMaster_1.CountryMaster.associate(connection.models);
RegionMaster_1.RegionMaster.associate(connection.models);
CityMaster_1.CityMaster.associate(connection.models);
SalesPersonMaster_1.SalesPersonMaster.associate(connection.models);
VerificationTokens_1.VerificationTokens.associate(connection.models);
ReferenceTypes_1.ReferenceTypes.associate(connection.models);
Roles_1.Roles.associate(connection.models);
UserRoles_1.UserRoles.associate(connection.models);
UserLoginDetails_1.UserLoginDetails.associate(connection.models);
module.exports = connection;
