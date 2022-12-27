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
exports.AddSalesPersonsUseCase = void 0;
class AddSalesPersonsUseCase {
    constructor(SalesPersonRepository) {
        this.SalesPersonRepository = SalesPersonRepository;
    }
    execute({ Name, ShortName, Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const deleteSalesPerson:any = await this.SalesPersonRepository.deleteSalesPerson({ SalesPersonId: 'af9007e4-f9e3-4451-82cd-323b0008ad2f' })
                const findSalesPerson = yield this.SalesPersonRepository.findSalesPerson({ Name, ShortName });
                if (findSalesPerson) {
                    return {
                        Status: false,
                        message: `${Name} with ${ShortName} is already exits...`,
                        data: {}
                    };
                }
                const AddSalesPersons = yield this.SalesPersonRepository.addSalesPersons({ Name, ShortName, Status });
                if (AddSalesPersons == null) {
                    return {
                        Status: false,
                        message: 'Something went wrong, Please try again later...',
                        data: {}
                    };
                }
                else {
                    return {
                        Status: true,
                        message: 'Sales Person Add successfully...',
                        data: AddSalesPersons
                    };
                }
            }
            catch (_a) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later 1...',
                    data: {}
                };
            }
        });
    }
    ;
}
exports.AddSalesPersonsUseCase = AddSalesPersonsUseCase;
