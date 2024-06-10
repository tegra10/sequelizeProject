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
Router.put("/:id", editPosts);
Router.delete("/:id", deletePosts);

module.exports = Router;
