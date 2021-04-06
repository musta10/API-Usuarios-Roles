import {Router} from 'express';
const router = Router()

import * as privateController from "../controllers/private.controller"
import {authJwt} from "../middlewares"

router.post('/', authJwt.verifyToken, privateController.createPrivate)

router.get('/', privateController.getPrivate)

router.get('/:privateId', privateController.getPrivateById)
router.put('/:privateId',  authJwt.verifyToken ,privateController.updatePrivateById)
router.delete('/:privateId', authJwt.verifyToken, privateController.deletePrivateById)




export default router;