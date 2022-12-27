import { SendMailRepository } from '../../../../Services/SendMail/repository/implementations/SendMailRepository';
import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { ForgotPasswordRequestController } from './forgotPasswordRequestController';
import { ForgotPasswordRequestUseCase } from './forgotPasswordRequestUseCases';

const userAuthRepository = new UserAuthRepository();
const sendMailRepository = new SendMailRepository() 
const forgotPasswordRequestUseCase = new ForgotPasswordRequestUseCase(userAuthRepository, sendMailRepository);
const forgotPasswordRequestController = new ForgotPasswordRequestController(forgotPasswordRequestUseCase);

export {
    forgotPasswordRequestController
}
