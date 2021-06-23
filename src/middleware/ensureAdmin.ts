import { Request, Response, NextFunction} from 'express'

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const admin = true;

  if (!admin) throw new Error('Unauthorized user! User must be administrator.');

  return next();
}
