"use strict";
const express = require("express");
const Router = express.Router();
const {
    getPosts,
    setPosts,
    editPosts,
    deletePosts,
    likePosts,
    disLikePosts
} = require("../controllers/post.controller.js");

Router.get("/", getPosts);
Router.post("/", setPosts);
Router.put("/:id", editPosts);
Router.patch("/like/:id", likePosts);
Router.patch("/dislike/:id", disLikePosts);
Router.delete("/:id", deletePosts);

module.exports = Router;
