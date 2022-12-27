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
exports.AddBusinessTypesUseCase = void 0;
class AddBusinessTypesUseCase {
    constructor(BusinessTypeRepository) {
        this.BusinessTypeRepository = BusinessTypeRepository;
    }
    execute({ BusinessType, Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const deleteBusinessType:any = await this.BusinessTypeRepository.deleteBusinessType({ BusinessTypeId: 'af9007e4-f9e3-4451-82cd-323b0008ad2f' })
                const findBusinessType = yield this.BusinessTypeRepository.findBusinessType({ BusinessType });
                if (findBusinessType) {
                    return {
                        Status: false,
                        message: `${BusinessType} Business type is already exits...`,
                        data: {}
                    };
                }
                const AddBusinessTypes = yield this.BusinessTypeRepository.addBusinessTypes({ BusinessType, Status });
                if (AddBusinessTypes == null) {
                    return {
                        Status: false,
                        message: 'Something went wrong, Please try again later...',
                        data: {}
                    };
                }
                else {
                    return {
                        Status: true,
                        message: 'Business types Add successfully...',
                        data: AddBusinessTypes
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
exports.AddBusinessTypesUseCase = AddBusinessTypesUseCase;
