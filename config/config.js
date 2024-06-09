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

module.exports = sequelize;
