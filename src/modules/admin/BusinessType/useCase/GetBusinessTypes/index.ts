import { BusinessTypeRepository } from '../../repository/implementations/BusinessTypeRepository';
import { GetBusinessTypesController } from './GetBusinessTypesController';
import { GetBusinessTypesUseCase } from './GetBusinessTypesUseCases';

const businessTypeRepository = new BusinessTypeRepository();
const getBusinessTypesUseCase = new GetBusinessTypesUseCase(businessTypeRepository);
const getBusinessTypesController = new GetBusinessTypesController(getBusinessTypesUseCase);

export { getBusinessTypesController }
