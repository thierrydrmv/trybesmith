import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import UserService from '../services/usersService';

dotenv.config();
const secret: string = process.env.JWT_SECRET || 'secret';

class UserController {
  constructor(private userService = new UserService()) { }

  public newUser = async (req: Request, res: Response) => {
    await this.userService.newUser(req.body);
    const { username } = req.body;
    const jwtConfig = {
      expiresIn: '1h',
    };
    const token = jwt.sign({ username }, secret, jwtConfig);
    return res.status(201).json({ token });
  };
}

export default UserController;