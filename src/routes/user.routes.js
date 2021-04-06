import {Router} from 'express';
const router = Router()
import * as userCtrl from "../controllers/user.controller"
import {authJwt, validerSignup} from "../middlewares" 


router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    validerSignup.checkRolesExiste
], userCtrl.createUser)




export default router;