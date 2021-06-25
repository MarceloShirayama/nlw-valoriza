import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

export class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const list_compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(list_compliments);
  }
}
