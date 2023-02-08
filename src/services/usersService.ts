import connection from '../models/connection';
import UserModel from '../models/usersModel';
import User from '../interfaces/userInterface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async newUser(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}

export default UserService;