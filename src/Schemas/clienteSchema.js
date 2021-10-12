const { Schema, model } = require('mongoose')
const { validateEmail } = require('../helpers/emailValidation.js')

const clienteSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true
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
            validate: [validateEmail, 'Please fill a valid email address'],
            //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor indtroduzca un email válido']
        },
        telefono: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model( 'Cliente', clienteSchema )
