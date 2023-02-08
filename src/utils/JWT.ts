import jwt, { SignOptions } from 'jsonwebtoken';
import JWTPayload from '../interfaces/JWTinterface';

const secret: string = process.env.JWT_SECRET || 'secret';

export default function createTokenJWT(payload: JWTPayload) {
  const config: SignOptions = {
    expiresIn: '1d',
  };
  const token = jwt.sign(payload, secret, config);
  return token;
}