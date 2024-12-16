import {Router} from 'express';
import {UserController} from '../controllers/UserController';

const router = Router();
const userController = new UserController();

// Endpoint to get user data by ID
router.get('/user/:id(\\d+)', (req, res) => userController.getUser(req, res));

// Endpoint to get a random user
router.get('/user/random', (req, res) => userController.getOneRandomUser(req, res));

export default router;