import { Request, Response } from "express";
import { AutheticateUserService } from "../services/AutheticateUserService";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AutheticateUserService();

    const token = await authenticateUserService.execute(
      { email, password }
    );

    return response.json(token);
  }
}
