import { Pool } from 'mysql2/promise';
import Login from '../interfaces/logintInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getByUsername(login: Login):Promise<Login> {
    const { username } = login;
    const user = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    const [rows] = user;
    const [result] = rows as Login[];
    return result;
  }
}