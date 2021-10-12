const { Router } = require("express")
const usuarioController = require("../Controllers/usuarioController.js")


const router = Router()
router.post('/usuario/crear', usuarioController.crear)
router.post('/usuario/actualizar', usuarioController.actualizar)
router.put('/usuario/borrar', usuarioController.borrar)



module.exports = router
