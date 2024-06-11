"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.js");
const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue("name", value.trim());
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            set(value) {
                this.setDataValue("email", value.trim());
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            set(value) {
                this.setDataValue("password", value.trim());
            }
        }
    },
    {
        timestamps: false
    }
);

module.exports = User;
