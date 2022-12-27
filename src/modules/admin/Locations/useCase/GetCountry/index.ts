import { LocationRepository } from '../../repository/implementations/Locations';
import { GetCountryController } from './GetCountryController';
import { GetCountryUseCase } from './GetCountryUseCases';

const locationRepository = new LocationRepository();
const getCountryUseCase = new GetCountryUseCase(locationRepository);
const getCountryController = new GetCountryController(getCountryUseCase);

export { getCountryController }
