import {ROLES} from '../models/Role'
import User from '../models/User';

export const duplicateNameOrEmail = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: 'Este Usuario Ya existe'})

    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(400).json({message: 'Este Email ya existe'})

    next();
}


export const checkRolesExiste = (req, res, next) => {
    console.log(req.body.roles);
    if(req.body.roles) {
        for (let i= 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} no existe este role`
                })  
            }
        }
        
    }
    next();
}
