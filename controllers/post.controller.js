"use strict";
const bcrypt = require("bcryptjs");
const postModel = require("../models/user.js");
// partie qui s'occupe de recuperer les données de la base des données
module.exports.getPosts = async (req, res) => {
    try {
        const users = await postModel
            .findAll({
                attributes: ["id", "name", "email", "password", "likes"]
            })
            .then(data => res.status(200).send(data));
    } catch (err) {
        res.status(500).json({ message: err });
        console.log("l'erreur est " + err);
    }
};
// partie des posts
module.exports.setPosts = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name) {
            res.status(400).json({ message: "Merci d'ajouter le nom" });
        } else if (!email) {
            res.status(400).json({
                message: "Merci d'ajouter le mot l'email"
            });
        } else if (!password) {
            console.error("y'a une erreur");
            res.status(400).json({
                message: "Merci d'ajouter le mot de passe"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const post = await postModel.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
    }
};

// partie de tout ce qui est edition des données existantes
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
// patch sur les likes
module.exports.likePosts = async (req, res) => {
    const userId = req.params.id;
    const likePost = req.body.likes;

    try {
        const user = await postModel.findByPk(userId);
        let likes = Array.isArray( user.likes )? user.likes: [];
        likes.push(likePost);
        await user.update({ likes });
        res.status(200).send("post liké");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `l'erreur est : ${err}` });
    }
};
module.exports.disLikePosts = async (req, res) => {};
// patch sur les disLikes
// partie de suppression des données
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
        })
        .catch(err => {
            res.status(500).json({ message: `l'erreur est ${err}` });
            console.error(err);
        });
};
