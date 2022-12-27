interface IBusinessTypeRepository {
    getBusinessTypes({ Status }:any): Promise<any>;
    addBusinessTypes({ BusinessType, Status }:any): Promise<any>;
    findBusinessType({ BusinessType }:any): Promise<any>;
    deleteBusinessType({ BusinessTypeId }:any): Promise<any>;
}

export {
    IBusinessTypeRepository
}