import express, { Express } from 'express';
import moment from 'moment';
import { router } from './routes/index.routes';
import path from 'path';
import morganBody from 'morgan-body';

require('./database');
require('dotenv').config();

const fs = require("fs");
const cors = require('cors');
const bodyParser = require('body-parser');

const app: Express = express();
app.use(cors({
    // origin: ['https://www.google.com/'],
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.json());


var dir = './src/logs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const log = fs.createWriteStream(path.join(__dirname + "/logs", `${moment().format('YYYY-MM-DD')}.log`), { flags: "a" });

// const passport = require("passport");
// app.use(passport.initialize());
// app.use(passport.session());

morganBody(app, {
    noColors: true,
    stream: log
})

app.get("/", (req, res)=>{
    res.send("welcome to bggems backend...")
})

app.use(router);
const PORT = process.env.PORT ? process.env.PORT : 8001;
app.listen(PORT, ()=>{
    console.log({"Server is running on PORT : ": PORT});
});
