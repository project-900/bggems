"use strict";
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
var HOST = process.env.DB_DEV_HOST;
var USERNAME = process.env.DB_DEV_USERNAME;
var PASSWORD = process.env.DB_DEV_PASSWORD;
var DATABASE = process.env.DB_DEV_DATABASE;
var DIALECT = process.env.DB_DEV_DIALECT;
var DRIVER = process.env.DB_DEV_DRIVER;
var PORT = process.env.DB_DEV_PORT;
if (process.env.NODE_ENV == 'production') {
    HOST = process.env.DB_PROD_HOST;
    USERNAME = process.env.DB_PROD_USERNAME;
    PASSWORD = process.env.DB_PROD_PASSWORD;
    DATABASE = process.env.DB_PROD_DATABASE;
    DIALECT = process.env.DB_PROD_DIALECT;
    DRIVER = process.env.DB_PROD_DRIVER;
    PORT = process.env.DB_PROD_PORT;
}
if (process.env.NODE_ENV == 'testing') {
    HOST = process.env.DB_TEST_HOST;
    USERNAME = process.env.DB_TEST_USERNAME;
    PASSWORD = process.env.DB_TEST_PASSWORD;
    DATABASE = process.env.DB_TEST_DATABASE;
    DIALECT = process.env.DB_TEST_DIALECT;
    DRIVER = process.env.DB_TEST_DRIVER;
    PORT = process.env.DB_TEST_PORT;
}
module.exports = {
    host: HOST,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    dialectOptions: {
        connectionString: `Server=${HOST},${PORT};Initial Catalog=${DATABASE};Persist Security Info=False;User ID=${USERNAME};Password=${PASSWORD};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;`,
        instanceName: "SQLEXPRESS",
        trustedConnection: true,
        options: {
            encrypt: process.env.NODE_ENV == 'production' ? true : false,
            enableArithAbort: false,
            trustServerCertificate: false
        }
    },
    dialect: DIALECT,
    port: PORT
};
