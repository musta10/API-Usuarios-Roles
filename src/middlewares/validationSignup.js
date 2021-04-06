import {ROLES} from '../models/Role'

export const checkRolesExiste = (req, res, next) => {
    if(req.body.roles) {
        for (let i= 0; i < req.body.roles.lenght; i++) {
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} no existe este role`
                })
            }
        }
    }
    next();
}
