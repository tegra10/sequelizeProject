"use strict";
const postModel = require("../models/user.js");
module.exports.setPosts = async (req, res) => {};
module.exports.getPosts = async (req, res) => {
    try {
        const users = await postModel.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: `l'erreur est ${err}` });
        console.log(err);
    }
};
module.exports.editPosts = async (req, res) => {};
module.exports.deletePosts = async (req, res) => {};
