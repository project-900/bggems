"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const index_routes_1 = require("./routes/index.routes");
const path_1 = __importDefault(require("path"));
const morgan_body_1 = __importDefault(require("morgan-body"));
require('./database');
require('dotenv').config();
const fs = require("fs");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use(cors({
    // origin: ['https://www.google.com/'],
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(bodyParser.json());
const log = fs.createWriteStream(path_1.default.join(__dirname + "/logs", `${(0, moment_1.default)().format('YYYY-MM-DD')}.log`), { flags: "a" });
// const passport = require("passport");
// app.use(passport.initialize());
// app.use(passport.session());
(0, morgan_body_1.default)(app, {
    noColors: true,
    stream: log
});
app.get("/", (req, res) => {
    res.send("welcome to bggems backend...");
});
app.use(index_routes_1.router);
const PORT = process.env.PORT ? process.env.PORT : 8001;
app.listen(PORT, () => {
    console.log({ "Server is running on PORT : ": PORT });
});
