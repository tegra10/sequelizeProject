"use strict";
const express = require("express");
const Router = express.Router();
const { getPosts, setPosts } = require("../controllers/post.controller.js");

Router.get("/", getPosts);
Router.post("/", setPosts);

module.exports = Router;
