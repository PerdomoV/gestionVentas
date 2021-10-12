const { Schema, model } = require('mongoose')

const rolSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model( 'Rol', rolSchema )
