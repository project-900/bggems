import { ReferenceTypeRepository } from '../../repository/implementations/ReferenceTypeRepository';
import { GetReferenceTypesController } from './GetReferenceTypesController';
import { GetReferenceTypesUseCase } from './GetReferenceTypesUseCases';

const referenceTypeRepository = new ReferenceTypeRepository();
const getReferenceTypesUseCase = new GetReferenceTypesUseCase(referenceTypeRepository);
const getReferenceTypesController = new GetReferenceTypesController(getReferenceTypesUseCase);

export { getReferenceTypesController }
