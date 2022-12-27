import { ILocationRepository } from '../../repository/ILocations';
interface IRequests {
    Status: any,
    CountryId: any,
}

class GetRegionUseCase {
    constructor(private LocationRepository: ILocationRepository) { }

    async execute({ Status, CountryId }: IRequests): Promise<any> {
        try {
            const GetRegion = await this.LocationRepository.getRegions({ Status, CountryId })
            if (GetRegion == null) {
                return {
                    Status: false,
                    message: 'Regions are there...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Regions get successfully...',
                    data: GetRegion
                };
            }
        } catch {
            return {
                Status: false,
                message: 'Something went wrong, Please try again later...',
                data: {}
            };
        }

    };

}

export {
    GetRegionUseCase
}