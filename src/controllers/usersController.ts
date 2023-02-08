import { Request, Response } from 'express';
import UserService from '../services/usersService';
import JWT from '../utils/JWT';

class UserController {
  constructor(private userService = new UserService()) { }

  public newUser = async (req: Request, res: Response) => {
    const response = await this.userService.newUser(req.body);
    const { username } = req.body;
    const token = JWT({ id: response.id, username });
    return res.status(201).json({ token });
  };
}

export default UserController;