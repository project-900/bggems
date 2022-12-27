import { ReferenceTypeRepository } from '../../repository/implementations/ReferenceTypeRepository';
import { AddReferenceTypesController } from './AddReferenceTypesController';
import { AddReferenceTypesUseCase } from './AddReferenceTypesUseCases';

const referenceTypeRepository = new ReferenceTypeRepository();
const addReferenceTypesUseCase = new AddReferenceTypesUseCase(referenceTypeRepository);
const addReferenceTypesController = new AddReferenceTypesController(addReferenceTypesUseCase);

export { addReferenceTypesController }
