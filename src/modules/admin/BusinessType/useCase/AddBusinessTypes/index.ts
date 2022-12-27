import { BusinessTypeRepository } from '../../repository/implementations/BusinessTypeRepository';
import { AddBusinessTypesController } from './AddBusinessTypesController';
import { AddBusinessTypesUseCase } from './AddBusinessTypesUseCases';

const businessTypeRepository = new BusinessTypeRepository();
const addBusinessTypesUseCase = new AddBusinessTypesUseCase(businessTypeRepository);
const addBusinessTypesController = new AddBusinessTypesController(addBusinessTypesUseCase);

export { addBusinessTypesController }
