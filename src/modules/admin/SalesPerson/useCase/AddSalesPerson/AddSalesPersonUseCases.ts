import { ISalesPersonRepository } from '../../repository/ISalesPersonRepository';
interface IRequests {
    Name: string,
    ShortName: string,
    Status: string,
}

class AddSalesPersonsUseCase {
    constructor(private SalesPersonRepository: ISalesPersonRepository) { }

    async execute({ Name, ShortName, Status }: IRequests): Promise<any> {
        try {
            // const deleteSalesPerson:any = await this.SalesPersonRepository.deleteSalesPerson({ SalesPersonId: 'af9007e4-f9e3-4451-82cd-323b0008ad2f' })
            const findSalesPerson = await this.SalesPersonRepository.findSalesPerson({ Name, ShortName })
            if(findSalesPerson){
                return {
                    Status: false,
                    message: `${Name} with ${ShortName} is already exits...`,
                    data: {}
                };
            }
    

            const AddSalesPersons = await this.SalesPersonRepository.addSalesPersons({ Name, ShortName, Status })
            if (AddSalesPersons == null) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Sales Person Add successfully...',
                    data: AddSalesPersons
                };
            }
        } catch {
            return {
                Status: false,
                message: 'Something went wrong, Please try again later 1...',
                data: {}
            };
        }

    };

}

export {
    AddSalesPersonsUseCase
}