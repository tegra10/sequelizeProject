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
module.exports.editPosts = async (req, res) => {
    const userId = req.params.id;
    const { name } = req.body;
    postModel
        .findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: "Utilisateur non trouvé" });
            } else {
                user.name = name;

                return user.save();
            }
        })
        .then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => {
            console.error(
                "Erreur lors de la mise à jour de l'utilisateur :",
                err
            );
            res.status(500).json({
                error: "Erreur lors de la mise à jour de l'utilisateur"
            });
        });
};

module.exports.deletePosts = async (req, res) => {
    const userId = req.params.id;
    postModel
        .findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(400).json({ message: `l'id n'est pas connu` });
            } else {
                return user.destroy();
            }
        })
        .then(() => {
            res.status(200).json({
                message: `l'id nº ${userId} a bien était supprimé`
            });
        }).catch(err=>{
          res.status(500).json({message:`l'erreur est ${err}`})
          console.error(err)
        })
        
};
