const express = require('express')
const db = require('./database/database.js')
const crearRoles = require('./libs/configuracionInicial.js')
const usuarioRouter = require('./routes/rutasUsuario.js')
const clienteRouter = require('./routes/rutasCliente.js')


const app = express()
crearRoles()

app.set('port', process.env.PORT || 3000)
app.use(express.json())

app.use('/api', usuarioRouter)
app.use('/api', clienteRouter)





app.listen(app.get('port'), () => {
  console.log(`Aplicacion corriendo en el puerto: ${app.get('port')}`)
})
