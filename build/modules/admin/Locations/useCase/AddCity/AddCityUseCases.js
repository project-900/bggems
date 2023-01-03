"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCityUseCase = void 0;
class AddCityUseCase {
    constructor(LocationRepository) {
        this.LocationRepository = LocationRepository;
    }
    execute({ CityName, CountryId, RegionId, TimeZone }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const AddCity = yield this.LocationRepository.AddCities({ CityName, CountryId, RegionId, TimeZone });
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
                }
                else {
                    return {
                        Status: true,
                        message: 'City Add successfully...',
                        data: {}
                    };
                }
            }
            catch (_a) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: {}
                };
            }
        });
    }
    ;
}
exports.AddCityUseCase = AddCityUseCase;
