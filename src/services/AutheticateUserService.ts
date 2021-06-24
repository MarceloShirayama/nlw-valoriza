import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAutheticateRequest {
  email: string;
  password: string;
}

export class AutheticateUserService {
  async execute({ email, password }: IAutheticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories. findOne({ email });

    if (!email) throw new Error('Invalid email or password!');

    const passwordMatch = await compare(password, user!.password);

    if(!passwordMatch) throw new Error('Invalid email or password!');

    const token = sign(
      { email: user?.email },
      '254e19c7cb56a618f4c5d6a557191b59',
      {
        subject: user?.id,
        expiresIn: '1d'
      }
    );

    return token;
  }
}
