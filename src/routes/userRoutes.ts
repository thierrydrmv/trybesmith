import { Router } from 'express';
import UserController from '../controllers/usersController';
import { 
  usersLevel, 
  usersPassword, 
  usersUsername, 
  usersVocation } from '../middleware/usersMiddleware';

const router = Router();

const userController = new UserController();

router.post(
  '/users',
  usersUsername,
  usersVocation,
  usersLevel,
  usersPassword,
  userController.newUser,
);

export default router;