const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelMusica = connection.define(
    'tbl_musica',
    {
        cod_musica:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_musica:{
            type:Sequelize.STRING(200),
            allowNull: false
        }

    }
);

// modelCategoria.sync({force:true});

module.exports = modelMusica;