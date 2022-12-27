import { ILocationRepository } from '../../repository/ILocations';
interface IRequests {
    CountryName: string,
    ShortName: string,
    Continent: string,
}

class AddCountryUseCase {
    constructor(private LocationRepository: ILocationRepository) { }

    async execute({ CountryName, ShortName, Continent }: IRequests): Promise<any> {
        try {
            const AddCountry = await this.LocationRepository.AddCountries({ CountryName, ShortName, Continent })
            if (AddCountry.error) {
                return {
                    Status: false,
                    message: 'Country is already exists...',
                    data: {}
                };
            }

            if (AddCountry == null) {
                return {
                    Status: false,
                    message: 'Country failed to add, Please try again later...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Country Add successfully...',
                    data: AddCountry
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
    AddCountryUseCase
}