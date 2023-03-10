import {usuario} from '../Models/usuario.js'
import bcrypt from 'bcrypt'

//Registrar un usuario en la base de datos
export const regusuario = (req,res) => {
const user = usuario(req.body)
user
.save()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))
}

//Información de todos los usuarios
export const mostrarusuarios = (req,res) => {
    usuario
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
}

//Información de un usuario en particular
export const onlyuser = (req,res) => {
    const { id }  = req.params;
    usuario
    .findById( id )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
}

//Actualización de un usuario en particular
export const upusuario = (req,res) => {
    const { id } = req.params;
    //Actualización del password de manera encriptada
    var { nomuser , password, correo } = req.body;
    const user = this
    let salt = bcrypt.genSaltSync(12);
    let hash = bcrypt.hashSync(password, salt);
    password = hash;
    //Nota: Para actualizar información SIEMPRE se usa set
    usuario
    .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
}


//Eliminación de un usuario en particular
export const delusuario = (req, res) =>
{
    const { id } = req.params;
    usuario
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
} 

export default regusuario;
