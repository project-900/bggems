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
exports.AddCountryUseCase = void 0;
class AddCountryUseCase {
    constructor(LocationRepository) {
        this.LocationRepository = LocationRepository;
    }
    execute({ CountryName, ShortName, Continent }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const AddCountry = yield this.LocationRepository.AddCountries({ CountryName, ShortName, Continent });
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
                }
                else {
                    return {
                        Status: true,
                        message: 'Country Add successfully...',
                        data: AddCountry
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
exports.AddCountryUseCase = AddCountryUseCase;
