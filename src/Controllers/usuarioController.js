require('../database/database.js')
const Usuario = require('../Schemas/usuarioSchema.js');
const bcrypt = require('bcrypt')

module.exports = {
    mostrar: async (req, res) => {
        try{
            const user = await User.findById(req.user._id)
            if(!user) return res.status(404).json({ message: "User not found"});
            return res.status(401).json(user)
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: "Internal server error"})
        }
    },

    crear: async (req, res) => {
        try{
            let {nombre, cedula, email, password, telefono, rol} = req.body
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            password = hash
            let usuario = await Usuario({
                                            nombre,
                                            cedula, 
                                            email,
                                            password, 
                                            telefono,
                                            rol
                                        }).save();

            if(!usuario) return res.status(500).json({message: "Error al crear usuario"}) 
            return res.status(201).json({   "mensaje": "Se creó un nuevo usuario",
                                            "nombre" : usuario["nombre"],
                                            "rol" : usuario["rol"],
                                            "cedula": usuario["cedula"],
                                            "email" : usuario["email"],
                                            "telefono" :usuario["telefono"],
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
            const usuarioActualizado = await Usuario.findOneAndUpdate(filtro, actualizacion);
            
            console.log(usuarioActualizado)
            
            if(!usuarioActualizado) return res.status(500).json({ mensaje: "No se pudo actualizar el usuario" })
            
            return res.status(201).json({message:'Usuario actualizado con éxito'})            
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })    
        }
    },

    borrar: async (req, res) => {
        try {
            let { id } = req.body 
            filtro = {_id : id}
            let borrado = await Usuario.deleteOne(filtro)
            console.log(borrado)
            if(!borrado) return res.status(500).json({mensaje: "Error al borrar"})
            return res.status(200).json({mensaje: "Elemento borrado con exito"})
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e }) 
        }
    }
}
