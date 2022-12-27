import { ILocationRepository } from '../../repository/ILocations';
interface IRequests {
    Status: any,
    CountryId: any, 
    RegionId: any
}

class GetCityUseCase {
    constructor(private LocationRepository: ILocationRepository) { }

    async execute({ Status, CountryId, RegionId }: IRequests): Promise<any> {
        try {
            const GetCity = await this.LocationRepository.getCities({ Status, CountryId, RegionId })
            if (GetCity == null) {
                return {
                    Status: false,
                    message: 'Cities are there...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Cities get successfully...',
                    data: GetCity
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
    GetCityUseCase
}