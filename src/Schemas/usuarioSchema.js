const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        cedula: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        telefono:{
            type: String,
            required: true,
            unique: true
        },
        
        rol: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model( 'Usuario', usuarioSchema )
