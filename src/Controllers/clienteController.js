require('../database/database.js')
const Cliente = require('../Schemas/clienteSchema.js');
// const bcrypt = require('bcrypt')

const { ObjectId } = require('mongodb');

module.exports = {
    mostrar: async (req, res) => {
        try{
            const cliente = await Cliente.findById(req.user._id)
            if(!cliente) return res.status(404).json({ message: "User not found"});
            return res.status(401).json(cliente)
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: "Internal server error"})
        }
    },

    crear: async (req, res) => {
        try{
            let { nombre, cedula, email, telefono } = req.body
            let cliente = await Cliente({
                                            nombre,
                                            cedula, 
                                            email,
                                            telefono
                                        }).save();

            if(!cliente) return res.status(500).json({message: "Error al crear cliente"}) 
            return res.status(201).json({   "mensaje": "Se creó un nuevo cliente",
                                            "nombre" : cliente["nombre"],
                                            "cedula": cliente["cedula"],
                                            "email" : cliente["email"],
                                            "telefono" :cliente["telefono"],
                                        })
        }catch(e) {
            console.error(e)
            return res.status(500).json({ message: e })
        }
    },
    actualizar: async (req, res) => {

        try{ 
            let {id, nombre, cedula, email, telefono } = req.body
            
            const filtro = {_id: id}
            const actualizacion = {id, nombre, cedula, email, telefono }
            const clienteActualizado = await Cliente.findOneAndUpdate(filtro, actualizacion);
            
            console.log(clienteActualizado)
            
            if(!clienteActualizado) return res.status(500).json({ mensaje: "No se pudo actualizar el cliente" })
            
            return res.status(201).json({message:'cliente actualizado con éxito'})            
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })    
        }
    },

    borrar: async (req, res) => {
        try {
            let { id } = req.body 
            filtro = {_id : id}
            let borrado = await Cliente.deleteOne(filtro)
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
                let cliente = await Cliente.findOne({_id : id})
                if (!cliente) return res.status(404).json({mensaje: "Cliente NO encontrado"})
                return res.status(200).json(cliente)
                
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })
        }
    },

    listar: async (req, res) => {
        try{
            let clientes = await Cliente.find({})
                //console.log(clientes.length)
                if (clientes.length === 0) return res.status(404).json({mensaje: "NO hay clientes registrados"})
                listaClientes = []
                clientes.forEach(( cliente ) => { 
                                            const item = {
                                                "nombre": cliente["nombre"],
                                                "cedula": cliente["cedula"],
                                                "email" : cliente["email"],
                                                "telefono" : cliente["telefono"]
                                            }    
                                            listaClientes.push(item)
                                           });

                return res.status(200).json(listaClientes)

            }catch(e){
            console.error(e)
            return res.status(500).json({ message: e })
        }
    }
}
