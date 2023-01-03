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
exports.AddReferenceTypesUseCase = void 0;
class AddReferenceTypesUseCase {
    constructor(ReferenceTypeRepository) {
        this.ReferenceTypeRepository = ReferenceTypeRepository;
    }
    execute({ ReferenceType, Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const deleteReferenceType:any = await this.ReferenceTypeRepository.deleteReferenceType({ ReferenceTypeId: 'af9007e4-f9e3-4451-82cd-323b0008ad2f' })
                const findReferenceType = yield this.ReferenceTypeRepository.findReferenceType({ ReferenceType });
                if (findReferenceType) {
                    return {
                        Status: false,
                        message: `${ReferenceType} Reference type is already exits...`,
                        data: {}
                    };
                }
                const AddReferenceTypes = yield this.ReferenceTypeRepository.addReferenceTypes({ ReferenceType, Status });
                if (AddReferenceTypes == null) {
                    return {
                        Status: false,
                        message: 'Something went wrong, Please try again later...',
                        data: {}
                    };
                }
                else {
                    return {
                        Status: true,
                        message: 'Reference types Add successfully...',
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
exports.AddReferenceTypesUseCase = AddReferenceTypesUseCase;
