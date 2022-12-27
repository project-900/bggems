import { SendMailRepository } from '../../../../Services/SendMail/repository/implementations/SendMailRepository';
import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { RegistrationController } from './registrationController';
import { RegistrationUseCase } from './registrationUseCases';

const userAuthRepository = new UserAuthRepository();
const sendMailRepository = new SendMailRepository() 
const registrationUseCase = new RegistrationUseCase(userAuthRepository, sendMailRepository);
const registrationController = new RegistrationController(registrationUseCase);

export {
    registrationController
}
