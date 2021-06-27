import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
 async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);
    const userReceiverExist = await usersRepositories.findOne(user_receiver);
    const compliment = complimentsRepositories.create({tag_id, user_receiver, user_sender, message});

    if(user_sender === user_receiver) throw new Error("Incorrect User Receiver!");
    if(!userReceiverExist) throw new Error("User Receiver does not exist!");

    await complimentsRepositories.save(compliment);

    return compliment;

 }
}

export { CreateComplimentService };