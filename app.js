"use strict";
const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const dotenv = require("dotenv").config("./.env");
const port = process.env.PORT || 3000;
// const sequelize=require("./config/config.js");
const sequelize = new Sequelize(
  
    process.env.DB,
    process.env.USER,
    process.env.PASS,
    {
        host: "localhost",
        dialect: "mysql"
    }
  // console.log('la basse des donnees est bien connecté')
);

app.get("/post", (req, res) => {
    res.json({ message: "je suis le message" });
});
app.listen(port, () => console.log(`le site tourne sur le port ${port}`));
