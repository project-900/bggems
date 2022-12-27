interface IReferenceTypeRepository {
    getReferenceTypes({ Status }:any): Promise<any>;
    addReferenceTypes({ ReferenceType, Status }:any): Promise<any>;
    findReferenceType({ ReferenceType }:any): Promise<any>;
    deleteReferenceType({ ReferenceTypeId }:any): Promise<any>;
}

export {
    IReferenceTypeRepository
}