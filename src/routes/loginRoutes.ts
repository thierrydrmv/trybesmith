import { Router } from 'express';
import LoginController from '../controllers/loginController';
import login from '../middleware/loginMiddleware';
import auth from '../middleware/validateJWT';

const router = Router();

const loginController = new LoginController();

router.post('/login', login, auth, loginController.getByUsername);

export default router;