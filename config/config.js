const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASS,
    {
        host: "localhost",
        dialect: "mysql"
    }
);
sequelize
    .sync()
    .then(() => {
        console.log("Base de données synchronisée");
    })
    .catch(error => {
        console.error(
            "Erreur lors de la synchronisation de la base de données : " + error
        );
    });

module.exports = sequelize;
