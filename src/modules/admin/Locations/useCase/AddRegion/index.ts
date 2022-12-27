import { LocationRepository } from '../../repository/implementations/Locations';
import { AddRegionController } from './AddRegionController';
import { AddRegionUseCase } from './AddRegionUseCases';

const locationRepository = new LocationRepository();
const addRegionUseCase = new AddRegionUseCase(locationRepository);
const addRegionController = new AddRegionController(addRegionUseCase);

export { addRegionController }
