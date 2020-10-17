import { Router } from 'express';
import {signInAdmin} from '../controllers/adminControllers';
import {authRequired}from '../middlewares/auth';
const controller = (req, res,next) =>{
    res.send('holllllla');
}

const router = Router();

router
    .route('/admin/signin')
    .post(signInAdmin);

router
    .route('/admin/notify')
    .post(authRequired,controller);

    
export default router;