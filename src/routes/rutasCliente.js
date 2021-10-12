const { Router } = require("express")
const clienteController = require("../Controllers/clienteController.js")
const { validarId } = require("../middlewares/idValidation.js")

const router = Router()

router.use('/cliente/mostrar/:id', validarId )

router.post('/cliente/crear', clienteController.crear)
router.post('/cliente/actualizar', clienteController.actualizar)
router.delete('/cliente/borrar', clienteController.borrar)
router.get('/cliente/mostrar/:id', clienteController.mostrar)
router.get('/cliente/listar', clienteController.listar)




module.exports = router
