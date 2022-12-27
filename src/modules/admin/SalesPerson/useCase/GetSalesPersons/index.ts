import { SalesPersonRepository } from '../../repository/implementations/SalesPersonRepository';
import { GetSalesPersonsController } from './GetSalesPersonsController';
import { GetSalesPersonsUseCase } from './GetSalesPersonsUseCases';

const salesPersonRepository = new SalesPersonRepository();
const getSalesPersonsUseCase = new GetSalesPersonsUseCase(salesPersonRepository);
const getSalesPersonsController = new GetSalesPersonsController(getSalesPersonsUseCase);

export { getSalesPersonsController }
