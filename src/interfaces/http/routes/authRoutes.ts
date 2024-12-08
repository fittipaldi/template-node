import {Router} from 'express';
import {AuthController} from '../controllers/AuthController';

const router = Router();
const authController = new AuthController();

router.post('/check-auth', (req, res) => authController.checkAuth(req, res));

export default router;