const { Schema, model } = require('mongoose')
const { validateEmail } = require('../helpers/emailValidation.js')


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
            lowercase: true,
            unique: true,
            validate: [validateEmail, 'Por favor ingrese un email válido'],
            //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor indtroduzca un email válido']
        },
        password: {
            type: String,
            required: true
        },
        telefono:{
            type: String,
            required: true,
            unique: false
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
