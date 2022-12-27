import { UserLoginDetailRepository } from '../../repository/implementations/GetUserLoginDetailsRepository';
import { GetUserLoginDetailsController } from './GetUserLoginDetailsController';
import { GetUserLoginDetailsUseCase } from './GetUserLoginDetailsUseCases';

const userLoginDetailRepository = new UserLoginDetailRepository();
const getUserLoginDetailsUseCase = new GetUserLoginDetailsUseCase(userLoginDetailRepository);
const getUserLoginDetailsController = new GetUserLoginDetailsController(getUserLoginDetailsUseCase);

export { getUserLoginDetailsController }
