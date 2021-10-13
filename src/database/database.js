const mongoose = require('mongoose')

// este string tiene la inof de la conexion a la basede datos
//"basededatos://servidordelabasededatos/nombredelabasededatos"
const SERVER = "mongodb://localhost/gestion"

mongoose.connect( SERVER,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection

db.on( 'error', console.error.bind( console , 'conection error q q:' ) )
db.once( 'open' , () => { console.log( 'Estamos conectados a: ' + SERVER ) } )

module.exports = db
