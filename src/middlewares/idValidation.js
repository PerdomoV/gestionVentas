const ObjectId = require('mongoose').Types.ObjectId;

function isValidObjectId(id){
    
    if(ObjectId.isValid(id)){
        console.log("estamos en isValidObjectId", id)
        if((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}


function validarId (req, res, next){
    if (req.params.id){
        // console.log(req.params.id)
        const idValido = isValidObjectId(req.params.id)
        if (!idValido){
            return res.status(400).json({mensaje: "id NO válido"})
        }
        else{
            console.log('Es valido el id')
            next()
        }
    }else{
        next()
    }
}

module.exports = { validarId }