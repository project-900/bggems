import { ISalesPersonRepository } from '../../repository/ISalesPersonRepository';
interface IRequests {
    Status: string,
}

class GetSalesPersonsUseCase {
    constructor(private SalesPersonRepository: ISalesPersonRepository) { }

    async execute({ Status }: IRequests): Promise<any> {
        try {
            const GetSalesPersons = await this.SalesPersonRepository.getSalesPersons({ Status })
            if (GetSalesPersons == null) {
                return {
                    Status: false,
                    message: 'No business types found...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Sales Persons get successfully...',
                    data: GetSalesPersons
                };
            }
        } catch {
            return {
                Status: false,
                message: 'Something went wrong, Please try again later...',
                data: {}
            };
        }

    };

}

export {
    GetSalesPersonsUseCase
}