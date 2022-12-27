import { SendMailRepository } from '../../repository/implementations/SendMailRepository';
import { SendMailController } from './SendMailController';
import { SendMailUseCase } from './SendMailUseCases';

const sendMailRepository = new SendMailRepository();
const sendMailUseCase = new SendMailUseCase(sendMailRepository);
const sendMailController = new SendMailController(sendMailUseCase);

export { sendMailController }
