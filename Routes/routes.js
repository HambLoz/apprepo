import  express from "express";
import {regusuario, mostrarusuarios, onlyuser, upusuario, delusuario} from '../controllers/usercontroller.js'
import {regevento, mostrareventos,onlyevento, upevento, delevento} from '../controllers/eventcontroller.js'


export const router = express.Router();
import {db} from '../mongodb.js'

//RUTAS PARA USUARIOS👫
//Registro de usuario
router.post('/regusuario',regusuario);
//Información de todos los usuarios
router.get('/shuser',mostrarusuarios);
//Información de un usuario en particular
router.get('/shuser/:id',onlyuser);
//Actualizar usuario
router.put('/shuser/:id', upusuario);
//Eliminar usuario
router.delete('/shuser/:id', delusuario)

//RUTAS PARA EVENTOS🕐
//Registro de evento
router.post('/regevento',regevento);
//Información de todos los eventos
router.get('/mostrareventos',mostrareventos);
//Información de un evento en particular
router.get('/mostrareventos/:id',onlyevento);
//Actualizar evento
router.put('/mostrareventos/:id', upevento);
//Eliminar evento
router.delete('/mostrareventos/:id', delevento)


//Mensaje de bienvenida🥺
router.get('/',function (req,res){
    res.send('Bienvenidos a nuesto primer proyecto🏁, by: Carlos y Hambart')
})


export default router;

