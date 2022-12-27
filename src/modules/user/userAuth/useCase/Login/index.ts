import { UserLoginDetailRepository } from '../../../../admin/UserLoginDetails/repository/implementations/GetUserLoginDetailsRepository';
import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { LoginController } from './loginController';
import { LoginUseCase } from './loginUseCases';

const userAuthRepository = new UserAuthRepository();
const userLoginDetailRepository = new UserLoginDetailRepository();

const loginUseCase = new LoginUseCase(userAuthRepository, userLoginDetailRepository);
const loginController = new LoginController(loginUseCase);

export {
    loginController
}
