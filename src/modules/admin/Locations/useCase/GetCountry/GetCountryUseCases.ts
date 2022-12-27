import { ILocationRepository } from '../../repository/ILocations';
interface IRequests {
    Status: any,
}

class GetCountryUseCase {
    constructor(private LocationRepository: ILocationRepository) { }

    async execute({ Status }: IRequests): Promise<any> {
        try {
            const GetCountry = await this.LocationRepository.getCountries({ Status })
            if (GetCountry == null) {
                return {
                    Status: false,
                    message: 'Countries are there...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Countries get successfully...',
                    data: GetCountry
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
    GetCountryUseCase
}