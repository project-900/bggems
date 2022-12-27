import { IBusinessTypeRepository } from '../../repository/IBusinessTypeRepository';
interface IRequests {
    BusinessType: string,
    Status: string,
}

class AddBusinessTypesUseCase {
    constructor(private BusinessTypeRepository: IBusinessTypeRepository) { }

    async execute({ BusinessType, Status }: IRequests): Promise<any> {
        try {
            // const deleteBusinessType:any = await this.BusinessTypeRepository.deleteBusinessType({ BusinessTypeId: 'af9007e4-f9e3-4451-82cd-323b0008ad2f' })
            const findBusinessType = await this.BusinessTypeRepository.findBusinessType({ BusinessType })
            if(findBusinessType){
                return {
                    Status: false,
                    message: `${BusinessType} Business type is already exits...`,
                    data: {}
                };
            }

            const AddBusinessTypes = await this.BusinessTypeRepository.addBusinessTypes({ BusinessType, Status })
            if (AddBusinessTypes == null) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Business types Add successfully...',
                    data: AddBusinessTypes
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
    AddBusinessTypesUseCase
}