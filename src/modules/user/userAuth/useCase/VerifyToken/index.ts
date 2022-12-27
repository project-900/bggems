import { UserAuthRepository } from '../../repository/implementations/UserAuthRepository';
import { VerifyTokenController } from './VerifyTokenController';
import { VerifyTokenUseCase } from './VerifyTokenUseCases';

const userAuthRepository = new UserAuthRepository();
const verifyTokenUseCase = new VerifyTokenUseCase(userAuthRepository);
const verifyTokenController = new VerifyTokenController(verifyTokenUseCase);

export {
    verifyTokenController
}
