import {Router} from 'express';

const router = Router()

router.get('/', (req,res) => {
    res.json('get liste')
})




export default router;