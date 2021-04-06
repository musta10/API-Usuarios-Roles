import {Router} from 'express';
const router = Router()

import * as privateController from "../controllers/private.controller"
import {verifyToken} from "../middlewares"

router.post('/', verifyToken, privateController.createPrivate)

router.get('/', privateController.getPrivate)

router.get('/:privateId', privateController.getPrivateById)
router.put('/:privateId',  verifyToken ,privateController.updatePrivateById)
router.delete('/:privateId', verifyToken, privateController.deletePrivateById)




export default router;