"use strict";
const express = require("express");
const Router = express.Router();
const {
    getPosts,
    setPosts,
    editPosts,
    deletePosts
} = require("../controllers/post.controller.js");

Router.get("/", getPosts);
Router.post("/", setPosts);
Router.put("/", editPosts);
Router.delete("/", deletePosts);

module.exports= Router