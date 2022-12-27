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
exports.GetUserLoginDetailsController = void 0;
class GetUserLoginDetailsController {
    constructor(GetUserLoginDetailsUseCase) {
        this.GetUserLoginDetailsUseCase = GetUserLoginDetailsUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const Skip = request.query.Skip;
            const Limit = request.query.Limit;
            const WhereClause = {};
            if (request.query.UserId) {
                WhereClause.UserId = request.query.Status;
            }
            if (request.query.Date) {
                WhereClause.Date = request.query.Date;
            }
            if (request.query.Time) {
                WhereClause.Time = request.query.Time;
            }
            if (request.query.Country) {
                WhereClause.Country = request.query.Country;
            }
            if (request.query.Region) {
                WhereClause.Region = request.query.Region;
            }
            if (request.query.City) {
                WhereClause.City = request.query.City;
            }
            const result = yield this.GetUserLoginDetailsUseCase.execute({ Skip, Limit, WhereClause });
            if (result.Status == true) {
                return response.status(200).send(result);
            }
            else {
                return response.status(500).send(result);
            }
        });
    }
}
exports.GetUserLoginDetailsController = GetUserLoginDetailsController;
