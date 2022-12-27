interface ILocationRepository {
    getCountries({ Status }:any): Promise<any>;
    getCities({ Status, CountryId, RegionId }:any): Promise<any>;
    getRegions({ Status, CountryId }:any): Promise<any>;
    
    AddCities({ CityName, CountryId, RegionId, TimeZone }:any): Promise<any>;
    AddCountries({ CountryName, ShortName, Continent }:any): Promise<any>;
    AddRegions({ RegionName, ShortName, CountryId }:any): Promise<any>;

}

export {
    ILocationRepository
}