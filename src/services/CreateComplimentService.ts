import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentsRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentsRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (user_sender === user_receiver) {
      throw new Error('A user is not allowed to register a compliment for himself!')
    }

    if (!userReceiverExists) throw new Error('User receiver do not exists!');

    const compliment = complimentsRepositories.create(
      {
        tag_id,
        user_sender,
        user_receiver,
        message
      }
    );

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}
