const express = require('express')
const db = require('./database/database.js')
const crearRoles = require('./libs/configuracionInicial.js')
const usuarioRouter = require('./routes/rutasUsuario.js')

const app = express()
crearRoles()

app.set('port', process.env.PORT || 3000)
app.use(express.json())

app.use('/api', usuarioRouter)





app.listen(app.get('port'), () => {
  console.log(`at port ${app.get('port')}`)
})
