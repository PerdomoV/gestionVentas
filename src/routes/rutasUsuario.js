const { Router } = require("express")
const usuarioController = require("../Controllers/usuarioController.js")
const { validarId } = require("../middlewares/idValidation.js")

const router = Router()

router.use('/usuario/mostrar/:id', validarId )

router.post('/usuario/crear', usuarioController.crear)
router.put('/usuario/actualizar', usuarioController.actualizar)
router.delete('/usuario/borrar', usuarioController.borrar)
router.get('/usuario/mostrar/:id', usuarioController.mostrar)
router.get('/usuario/listar', usuarioController.listar)




module.exports = router
