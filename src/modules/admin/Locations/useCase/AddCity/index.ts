import { LocationRepository } from '../../repository/implementations/Locations';
import { AddCityController } from './AddCityController';
import { AddCityUseCase } from './AddCityUseCases';

const locationRepository = new LocationRepository();
const addCityUseCase = new AddCityUseCase(locationRepository);
const addCityController = new AddCityController(addCityUseCase);

export { addCityController }
