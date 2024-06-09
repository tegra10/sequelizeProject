"use strict";
const express = require("express");
const Router = express.Router();
const {
    getPosts,
} = require("../controllers/post.controller.js");

Router.get("/", getPosts);


module.exports= Router