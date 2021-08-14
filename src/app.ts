import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import fs from "fs";
import path from "path";
import axios from "axios";


const app: Application = express();

// Init Morgan
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});

app.use(logger("combined", { stream: accessLogStream }));

// Manage cors, menentukan situs mana yang boleh akses, situs yang mana yang di blacklist
app.use(cors());

// Init Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Init Cross Server Scripting
app.use(helmet.xssFilter());

app.listen(5000, () => {
    console.log("Server Running Port 5000")
})