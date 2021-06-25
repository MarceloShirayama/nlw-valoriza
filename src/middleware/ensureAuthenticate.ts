import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticate(
  request: Request, response: Response, next: NextFunction
) {
  const authToken =  request.headers.authorization;

  if (!authToken) return response.status(401).end();

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, '254e19c7cb56a618f4c5d6a557191b59');
    request.user_id = sub as string;
    return next();

  } catch (error) {
    return response.status(401).end();
  }
}
