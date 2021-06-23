import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if(!name) throw new Error('Incorrect tag name!')

    const tagNameAlreadyExists = await tagsRepository.findOne({ name });

    if (tagNameAlreadyExists) throw new Error('Tag already exists!')

    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);

    return tag;
  }
}
