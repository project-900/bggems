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
exports.GetReferenceTypesController = void 0;
class GetReferenceTypesController {
    constructor(GetReferenceTypesUseCase) {
        this.GetReferenceTypesUseCase = GetReferenceTypesUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const Status = request.query.Status;
            const result = yield this.GetReferenceTypesUseCase.execute({ Status: Status ? Status : 'all' });
            if (result.Status == true) {
                return response.status(200).send(result);
            }
            else {
                return response.status(500).send(result);
            }
        });
    }
}
exports.GetReferenceTypesController = GetReferenceTypesController;