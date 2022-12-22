import mongoose, {Mongoose} from 'mongoose'
import {db} from '../mongodb.js'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema (
{
    nomuser:{
        type: String,
        require:true
      },
    correo: {
        type: String,
        require: true,
        lowercase: true,
        unique:true
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    password: {
         type: String,
         require: true
    }
},
{
    timestamps: true,
    versionkey: false,
}
);

userSchema.pre('save', function(next) {
    const user = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next()
});

//Acá exportamoosss
export const usuario = mongoose.model('users',userSchema);
export default usuario;
