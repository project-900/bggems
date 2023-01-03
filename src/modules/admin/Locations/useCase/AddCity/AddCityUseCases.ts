import { ILocationRepository } from '../../repository/ILocations';
interface IRequests {
    CityName: string,
    CountryId: string,
    RegionId: string,
    TimeZone: string,
}

class AddCityUseCase {
    constructor(private LocationRepository: ILocationRepository) { }

    async execute({ CityName, CountryId, RegionId, TimeZone }: IRequests): Promise<any> {
        try {
            const AddCity:any = await this.LocationRepository.AddCities({ CityName, CountryId, RegionId, TimeZone })
            if (AddCity.error) {
                return {
                    Status: false,
                    message: 'City is already exists...',
                    data: {}
                };
            }

            if (AddCity == null) {
                return {
                    Status: false,
                    message: 'Failed to create City, please try again later...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'City Add successfully...',
                    data: {}
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
    AddCityUseCase
}