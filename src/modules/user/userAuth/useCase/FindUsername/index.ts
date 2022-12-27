import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { FindUsernameController } from './findUsernameController';
import { FindUsernameUseCase } from './findUsernameUseCases';

const userAuthRepository = new UserAuthRepository();
const findUsernameUseCase = new FindUsernameUseCase(userAuthRepository);
const findUsernameController = new FindUsernameController(findUsernameUseCase);

export {
    findUsernameController
}
