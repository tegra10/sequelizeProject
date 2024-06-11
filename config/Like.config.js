const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.LIKE_USER,
    process.env.USER,
    process.env.PASS,
    {
        host: "localhost",
        dialect: "mysql"
    }
);
const auth = async () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log("table des likes synchronisée");
        })
        .catch(error => {
            console.error(
                "Erreur lors de la synchronisation de la base de données : " +
                    error
            );
        });
};
auth();

module.exports = sequelize;
