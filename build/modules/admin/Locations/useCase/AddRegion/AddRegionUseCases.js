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
exports.AddRegionUseCase = void 0;
class AddRegionUseCase {
    constructor(LocationRepository) {
        this.LocationRepository = LocationRepository;
    }
    execute({ RegionName, ShortName, CountryId }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const AddRegion = yield this.LocationRepository.AddRegions({ RegionName, ShortName, CountryId });
                if (AddRegion.error) {
                    return {
                        Status: false,
                        message: 'Region is already exists...',
                        data: {}
                    };
                }
                else {
                    return {
                        Status: true,
                        message: 'Region Add successfully...',
                        data: AddRegion
                    };
                }
            }
            catch (err) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: { err }
                };
            }
        });
    }
    ;
}
exports.AddRegionUseCase = AddRegionUseCase;
