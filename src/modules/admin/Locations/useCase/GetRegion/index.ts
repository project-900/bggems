import { LocationRepository } from '../../repository/implementations/Locations';
import { GetRegionController } from './GetRegionController';
import { GetRegionUseCase } from './GetRegionUseCases';

const locationRepository = new LocationRepository();
const getRegionUseCase = new GetRegionUseCase(locationRepository);
const getRegionController = new GetRegionController(getRegionUseCase);

export { getRegionController }
