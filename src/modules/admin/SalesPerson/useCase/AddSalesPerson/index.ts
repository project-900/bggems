import { SalesPersonRepository } from '../../repository/implementations/SalesPersonRepository';
import { AddSalesPersonsController } from './AddSalesPersonController';
import { AddSalesPersonsUseCase } from './AddSalesPersonUseCases';

const salesPersonRepository = new SalesPersonRepository();
const addSalesPersonsUseCase = new AddSalesPersonsUseCase(salesPersonRepository);
const addSalesPersonsController = new AddSalesPersonsController(addSalesPersonsUseCase);

export { addSalesPersonsController }
