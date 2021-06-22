import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories)
        const userAlreadyExists = await usersRepository.findOne({email});
        const user = usersRepository.create({ name,email,admin });

        if(!email) throw new Error("Email incorrect")        
        if(userAlreadyExists) throw new Error("User already exists")

        await usersRepository.save(user);
        
        return user;
    }
}
export { CreateUserService }