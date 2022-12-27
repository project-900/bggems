interface ISalesPersonRepository {
    getSalesPersons({ Status }:any): Promise<any>;
    addSalesPersons({ Name, ShortName, Status }:any): Promise<any>;
    findSalesPerson({ Name, ShortName, }:any): Promise<any>;
    deleteSalesPerson({ SalesPersonId }:any): Promise<any>;
}

export {
    ISalesPersonRepository
}