const mongoose = require('mongoose')

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
