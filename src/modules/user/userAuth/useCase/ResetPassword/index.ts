import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { ResetPasswordController } from './ResetPasswordController';
import { ResetPasswordUseCase } from './ResetPasswordUseCases';

const userAuthRepository = new UserAuthRepository();
const resetPasswordUseCase = new ResetPasswordUseCase(userAuthRepository);
const resetPasswordController = new ResetPasswordController(resetPasswordUseCase);

export {
    resetPasswordController
}
