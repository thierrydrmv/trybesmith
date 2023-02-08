import { Router } from 'express';
import LoginController from '../controllers/loginController';
import login from '../middleware/loginMiddleware';

const router = Router();

const loginController = new LoginController();

router.post('/login', login, loginController.getByUsername);

export default router;