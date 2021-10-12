const { Schema, model } = require('mongoose')

const cargoSchema = new Schema(
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

module.exports = model( 'Cargo', cargoSchema )
