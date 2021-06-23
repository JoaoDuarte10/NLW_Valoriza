import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tagAlreadyExist = await tagsRepositories.findOne({name});
        const tag = tagsRepositories.create({name});

        if(!name) throw new Error("Incorrect name!")
        if(tagAlreadyExist) throw new Error("Tag already exist!")

        await tagsRepositories.save(tag)

        return tag;
    }
}

export { CreateTagService }