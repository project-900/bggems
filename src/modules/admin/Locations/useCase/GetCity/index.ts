import { LocationRepository } from '../../repository/implementations/Locations';
import { GetCityController } from './GetCityController';
import { GetCityUseCase } from './GetCityUseCases';

const locationRepository = new LocationRepository();
const getCityUseCase = new GetCityUseCase(locationRepository);
const getCityController = new GetCityController(getCityUseCase);

export { getCityController }
