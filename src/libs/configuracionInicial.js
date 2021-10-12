const Rol =  require('../Schemas/rolSchema.js');
const Cargo =  require('../Schemas/cargoSchema.js');

const crearRoles = async () => {
    try{
        const count = await Rol.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Rol({ nombre: "empleado"}).save(),
            new Rol({ nombre: "admin"}).save()
        ]);
        console.log(values);
    } catch(error){
        console.error(error);
    }
}

module.exports = crearRoles;
