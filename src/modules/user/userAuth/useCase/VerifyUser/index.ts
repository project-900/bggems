import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { SendMailRepository } from '../../../../Services/SendMail/repository/implementations/SendMailRepository'
import { VerifyUserController } from './VerifyUserController';
import { VerifyUserUseCase } from './VerifyUserUseCases';

const userAuthRepository = new UserAuthRepository();
const sendMailRepository = new SendMailRepository();
const verifyUserUseCase = new VerifyUserUseCase(userAuthRepository, sendMailRepository);
const verifyUserController = new VerifyUserController(verifyUserUseCase);

export {
    verifyUserController
}
