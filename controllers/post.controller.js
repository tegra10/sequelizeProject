"use strict";
const postModel = require("../models/user.js");

module.exports.getPosts = async (req, res) => {
    try {
        const users = await postModel.findAll({
            attributes: ["id", "nom", "email"]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err });
        console.log('l\'erreur est ' + err);
    }
};
