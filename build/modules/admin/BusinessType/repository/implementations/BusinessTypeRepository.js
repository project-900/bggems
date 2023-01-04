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
exports.BusinessTypeRepository = void 0;
const BusinessTypes_1 = require("../../../../../models/BusinessTypes");
const sequelize_1 = require("sequelize");
class BusinessTypeRepository {
    // Get all business types
    getBusinessTypes({ Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            let whereClause = {};
            if (Status == 'active') {
                whereClause = { Status: Status };
            }
            const result = yield BusinessTypes_1.BusinessTypes.findAll({
                attributes: {
                    exclude: ['Status', 'createdAt', 'updatedAt']
                },
                where: whereClause,
                order: [['OrdNo', 'asc']]
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
    findBusinessType({ BusinessType }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield BusinessTypes_1.BusinessTypes.findOne({
                where: {
                    BusinessType: BusinessType,
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
    // Add all business types
    addBusinessTypes({ BusinessType, Status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield BusinessTypes_1.BusinessTypes.findAll({
                attributes: [
                    [sequelize_1.Sequelize.fn('count', sequelize_1.Sequelize.col('Id')), 'count']
                ]
            });
            const result = yield BusinessTypes_1.BusinessTypes.create({
                BusinessType: BusinessType,
                OrdNo: count.length > 0 ? count[0].dataValues.count + 1 : 0,
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
    deleteBusinessType({ BusinessTypeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield BusinessTypes_1.BusinessTypes.destroy({
                where: {
                    Id: BusinessTypeId,
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
exports.BusinessTypeRepository = BusinessTypeRepository;
