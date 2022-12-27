import { ILocationRepository } from '../../repository/ILocations';
interface IRequests {
    RegionName: string,
    ShortName: string,
    CountryId: string,
}

class AddRegionUseCase {
    constructor(private LocationRepository: ILocationRepository) { }

    async execute({ RegionName, ShortName, CountryId }: IRequests): Promise<any> {
        try {
            const AddRegion = await this.LocationRepository.AddRegions({ RegionName, ShortName, CountryId })
            if (AddRegion.error) {
                return {
                    Status: false,
                    message: 'Region is already exists...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Region Add successfully...',
                    data: AddRegion
                };
            }
        } catch(err) {
            return {
                Status: false,
                message: 'Something went wrong, Please try again later...',
                data: {err}
            };
        }

    };

}

export {
    AddRegionUseCase
}