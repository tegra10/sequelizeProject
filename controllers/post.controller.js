"use strict";
const postModel = require("../models/user.js");

module.exports.getPosts = async (req, res) => {
    try {
        const users = await postModel.findAll({
            attributes: ["id", "name", "email"]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err });
        console.log("l'erreur est " + err);
    }
};
module.exports.setPosts = async (req, res) => {
    const { name, email } = req.body;
    try {
        if (!name) {
            res.status(400).json({ message: "Merci d'ajouter un message" });
        }

        const post = await postModel.create({
            name,
            email
        });
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
    }
};
