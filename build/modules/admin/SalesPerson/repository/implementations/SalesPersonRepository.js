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
exports.SalesPersonRepository = void 0;
const SalesPersonMaster_1 = require("../../../../../models/SalesPersonMaster");
class SalesPersonRepository {
    // Get all business types
    getSalesPersons({ Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            let whereClause = {};
            if (Status == 'active') {
                whereClause = { Status: Status };
            }
            const result = yield SalesPersonMaster_1.SalesPersonMaster.findAll({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: whereClause,
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // Add all business types
    findSalesPerson({ Name, ShortName }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield SalesPersonMaster_1.SalesPersonMaster.findOne({
                    where: {
                        Name: Name,
                        ShortName: ShortName,
                    }
                });
                if (result) {
                    return result;
                }
                else {
                    return null;
                }
            }
            catch (_a) {
                return null;
            }
        });
    }
    // Add all business types
    addSalesPersons({ Name, ShortName, Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({
                Name: Name,
                ShortName: ShortName,
                Status: Status
            });
            const result = yield SalesPersonMaster_1.SalesPersonMaster.create({
                Name: Name,
                ShortName: ShortName,
                Status: Status
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
    // Add all business types
    deleteSalesPerson({ SalesPersonId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield SalesPersonMaster_1.SalesPersonMaster.destroy({
                where: {
                    Id: SalesPersonId,
                }
            });
            if (result) {
                return result;
            }
            else {
                return null;
            }
        });
    }
}
exports.SalesPersonRepository = SalesPersonRepository;
