import {evento} from '../Models/evento.js';

//Regitrar un evento en la base de datos
export const regevento = (req, res) => {
    const cevento = evento(req.body);
    cevento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  }

//Información de todos los eventos
export const mostrareventos = (req,res) => {
    evento
    .find()
    .then((data) => res.json(data) )
    .catch((error) => res.json ({ message: error}))    
  }

//Información de un evento en particular
export const onlyevento =(req,res) => {
    const { id } = req.params;
    evento
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
  }

//Actualizar información de un evento en particular
  export const upevento = (req,res) => {
    const {id} = req.params;
    const {fecha, equipo1, equipo2, marcador1,marcador2,tipoevento} = req.body
    evento
    .updateOne({ _id: id }, { $set: { fecha, equipo1, equipo2, marcador1, marcador2, tipoevento } })
    .then((data) => res.json(data) )
    .catch((error) => res.json({message: error}))
  }

//Eliminar información de un evento en particular
  export const delevento = (req,res) => {
    const {id} = req.params;
    evento
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
  }

  export default regevento;