const {Sequelize,DataTypes} = require("sequelize");
const db = require("../db/conn")

const Livro = db.define("Livro",{
    nome: {
        allowNull: false,
        type: DataTypes.STRING
    },
    tipo: {
        allowNull: false,
        type: DataTypes.STRING
    },
    autor: {
        allowNull: false,
        type: DataTypes.STRING
    },
    ano: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})

module.exports = Livro