import { Router } from 'express';
import UserController from '../controllers/usersController';

const router = Router();

const userController = new UserController();

router.post('/users', userController.newUser);

export default router;