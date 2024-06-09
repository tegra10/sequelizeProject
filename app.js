"use strict";
const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const dotenv = require("dotenv").config("./.env");
const port = process.env.PORT || 3000;
const sequelize=require("./config/config.js");




app.use("/post", require('./routes/user.routes.js'));
app.listen(port, () => console.log(`le site tourne sur le port ${port}`));
