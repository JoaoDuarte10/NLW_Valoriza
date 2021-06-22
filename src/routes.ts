import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"
import { UsersRepositories } from "./repositories/UsersRepositories";
const router = Router();
const createUserController = new CreateUserController();

router.post('/users', createUserController.handle)

export { router };