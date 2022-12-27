import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { FindUserController } from './findUserController';
import { FindUserUseCase } from './findUserUseCases';

const userAuthRepository = new UserAuthRepository();
const findUserUseCase = new FindUserUseCase(userAuthRepository);
const findUserController = new FindUserController(findUserUseCase);

export {
    findUserController
}
