import { Request, Response } from 'express';
import JWT from '../utils/JWT';
import LoginService from '../services/loginService';
import JWTPayload from '../interfaces/JWTinterface';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public getByUsername = async (req: Request, res: Response) => {
    const user = await this.loginService.getByUserName(req.body);
    if (user.message) return res.status(user.status).json({ message: user.message });
    const { id, username } = user as JWTPayload;
    const token = JWT({ id, username });
    
    return res.status(200).json({ token });
  };
}

export default LoginController;