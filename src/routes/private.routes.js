import {Router} from 'express';
const router = Router()

import * as privateController from "../controllers/private.controller"
import {authJwt} from "../middlewares"

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], privateController.createPrivate)

router.get('/', privateController.getPrivate)

router.get('/:privateId', privateController.getPrivateById)
router.put('/:privateId',  [authJwt.verifyToken, authJwt.isModerator] ,privateController.updatePrivateById)
router.delete('/:privateId', [authJwt.verifyToken, authJwt.isModerator], privateController.deletePrivateById)




export default router;