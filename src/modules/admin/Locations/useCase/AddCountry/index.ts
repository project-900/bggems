import { LocationRepository } from '../../repository/implementations/Locations';
import { AddCountryController } from './AddCountryController';
import { AddCountryUseCase } from './AddCountryUseCases';

const locationRepository = new LocationRepository();
const addCountryUseCase = new AddCountryUseCase(locationRepository);
const addCountryController = new AddCountryController(addCountryUseCase);

export { addCountryController }
