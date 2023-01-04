require('dotenv').config();
const DB_CONFIG = require("../config/database.js");
const Sequelize = require("sequelize");

const connection = new Sequelize(DB_CONFIG);

connection.authenticate().then(() => {
    console.log({'Connection has been established successfully................': ''});
}).catch((error) => {
    console.error({'Unable to connect to the database:............... ': error});
});

import { Users } from "../models/Users";
import { BusinessTypes } from "../models/BusinessTypes";
import { CountryMaster } from "../models/CountryMaster";
import { RegionMaster } from "../models/RegionMaster";
import { CityMaster } from "../models/CityMaster";
import { SalesPersonMaster } from "../models/SalesPersonMaster";

import { VerificationTokens } from "../models/VerificationTokens";
import { ReferenceTypes } from "../models/ReferenceTypes";

import { Roles } from "../models/Roles";
import { UserRoles } from "../models/UserRoles";
import { UserLoginDetails } from "../models/UserLoginDetails";

Users.init(connection);
BusinessTypes.init(connection);
CountryMaster.init(connection);
RegionMaster.init(connection);
CityMaster.init(connection);
SalesPersonMaster.init(connection);
VerificationTokens.init(connection);
ReferenceTypes.init(connection);
Roles.init(connection);
UserRoles.init(connection);
UserLoginDetails.init(connection);

Users.associate(connection.models);
BusinessTypes.associate(connection.models);
CountryMaster.associate(connection.models);
RegionMaster.associate(connection.models);
CityMaster.associate(connection.models);
SalesPersonMaster.associate(connection.models);
VerificationTokens.associate(connection.models);
ReferenceTypes.associate(connection.models);
Roles.associate(connection.models);
UserRoles.associate(connection.models);
UserLoginDetails.associate(connection.models);

module.exports = connection;
