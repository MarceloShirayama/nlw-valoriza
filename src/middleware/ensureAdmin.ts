import { Request, Response, NextFunction} from 'express'
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const user = await usersRepositories.findOne(user_id);

  if (!user?.admin) throw new Error('Unauthorized user! User must be administrator.');

  return next();
}
