require('../database/database.js')
const Venta = require('../Schemas/usuarioSchema.js');
const bcrypt = require('bcrypt')

const { ObjectId } = require('mongodb');

module.exports = {
    mostrar: async (req, res) => {
        try{
            const venta = await Venta.findById(req.venta.id)
            if(!venta) return res.status(404).json({ message: "Venta NO encontrada" });
            return res.status(401).json(venta)
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: "Internal server error"})
        }
    },

    crear: async (req, res) => {
        try{
            let {usuario, cliente, producto, cantidad, valor, estado, fecha_de_pago } = req.body
            
            let venta = new Venta({
                                    usuario, 
                                    cliente,
                                    producto, 
                                    cantidad, 
                                    valor, 
                                    estado,
                                    fecha_de_pago
                              });
            
            venta.fecha_de_pago instanceof Date;

            if(!venta) return res.status(500).json({message: "Error al crear usuario"}) 
            return res.status(201).json({   "mensaje": "Se creó una nueva venta",
                                            "usuario": venta["usuario"],
                                            "cliente": venta["cliente"],
                                            "producto": venta["producto"],
                                            "cantidad": venta["cantidad"],
                                            "valor" : venta["valor"],
                                            "estado": venta["estado"],
                                            "fecha_de_pago": venta["fecha_de_pago"]
                                        })
        }catch(e) {
            console.error(e)
            return res.status(500).json({ message: e })
        }
    },
    actualizar: async (req, res) => {

        try{ 
            let {id, nombre, cedula, email, password, telefono, rol} = req.body
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            password = hash

            const filtro = {_id: id}
            const actualizacion = {nombre, cedula, email, password, telefono, rol}
            const usuarioActualizado = await Venta.findOneAndUpdate(filtro, actualizacion);
            
            console.log(usuarioActualizado)
            
            if(!usuarioActualizado) return res.status(500).json({ mensaje: "No se pudo actualizar el usuario" })
            
            return res.status(201).json({message:'Venta actualizado con éxito'})            
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })    
        }
    },

    borrar: async (req, res) => {
        try {
            let { id } = req.body 
            filtro = {_id : id}
            let borrado = await Venta.deleteOne(filtro)
            console.log(borrado)
            if(!borrado) return res.status(500).json({mensaje: "Error al borrar"})
            return res.status(200).json({mensaje: "Elemento borrado con exito"})
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e }) 
        }
    },

    mostrar: async (req, res) => {
        try{
            // console.log('id = ', req.params.id)
                id = ObjectId(req.params.id)
                let usuario = await Venta.findOne({_id : id})
                // console.log('suario = ', usuario)
                if (!usuario) return res.status(404).json({mensaje: "Venta NO encontrado"})
                return res.status(200).json(usuario)
                
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })
        }
    },

    listar: async (req, res) => {
        try{
            let usuarios = await Venta.find({})
                //console.log(usuarios.length)
                if (usuarios.length === 0) return res.status(404).json({mensaje: "NO hay usuarios registrados"})
                listaUsuarios = []
                usuarios.forEach((usuario) => { 
                                            const item = {
                                                "nombre": usuario["nombre"],
                                                "rol" : usuario["rol"],
                                                "cedula": usuario["cedula"],
                                                "email" : usuario["email"],
                                                "telefono" :usuario["telefono"]
                                            }    

                                            listaUsuarios.push(item)
                                           });
                return res.status(200).json(listaUsuarios)

            }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })
        }
    }
}
