import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret: Secret = process.env.JWT_SECRET || 'secret';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');
  
    if (!token) return res.status(401).json({ message: 'Token not found' });
  
    const decoded = jwt.verify(token, secret);
    (req as CustomRequest).token = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;