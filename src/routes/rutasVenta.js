const { Router } = require("express")
const ventaController = require("../Controllers/ventaController.js")
const { validarId } = require("../middlewares/idValidation.js")

const router = Router()

router.use('/venta/mostrar/:id', validarId )

router.post('/venta/crear', ventaController.crear)
router.post('/venta/actualizar', ventaController.actualizar)
router.delete('/venta/borrar', ventaController.borrar)
router.get('/venta/mostrar/:id', ventaController.mostrar)
router.get('/venta/listar', ventaController.listar)





module.exports = router
