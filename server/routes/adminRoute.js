import { Router } from 'express';
import {signInAdmin, notifyUsers} from '../controllers/adminControllers';
import {authRequired}from '../middlewares/auth';

const router = Router();

router
    .route('/admin/signin')
    .post(signInAdmin);

router
    .route('/admin/notify')
    .post(authRequired,notifyUsers);

    
export default router;