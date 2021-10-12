const { Router } = require("express")
const usuarioController = require("../Controllers/usuarioController.js")


const router = Router()
router.post('/usuario/crear', usuarioController.crear)

module.exports = router
