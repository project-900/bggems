import { IBusinessTypeRepository } from '../../repository/IBusinessTypeRepository';
interface IRequests {
    Status: string,
}

class GetBusinessTypesUseCase {
    constructor(private BusinessTypeRepository: IBusinessTypeRepository) { }

    async execute({ Status }: IRequests): Promise<any> {
        try {
            const GetBusinessTypes = await this.BusinessTypeRepository.getBusinessTypes({ Status })
            if (GetBusinessTypes == null) {
                return {
                    Status: false,
                    message: 'No business types found...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Business types get successfully...',
                    data: GetBusinessTypes
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
    GetBusinessTypesUseCase
}