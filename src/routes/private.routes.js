import {Router} from 'express';
const router = Router()

import * as privateController from "../controllers/private.controller"

router.post('/', privateController.createPrivate)

router.get('/', privateController.getPrivate)

router.get('/:privateId', privateController.getPrivateById)
router.put('/:privateId', privateController.updatePrivateById)
router.delete('/:privateId', privateController.deletePrivateById)




export default router;