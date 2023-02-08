import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import Login from '../interfaces/logintInterface';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getByUserName(login: Login): Promise<Login | { message: string, status: number }> {
    const result = await this.model.getByUsername(login);
    if (
      !result 
      || result.username !== login.username 
      || result.password !== login.password) {
      return { message: 'Username or password invalid', status: 401 };
    }
    return result;
  }
}

export default LoginService;