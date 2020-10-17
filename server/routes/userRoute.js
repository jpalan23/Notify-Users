import { Router } from 'express';
import {subscribeUser} from '../controllers/userControllers';

const router = Router();

router
    .route('/user')
    .post(subscribeUser)


export default router;