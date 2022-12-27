import { IReferenceTypeRepository } from '../../repository/IReferenceTypeRepository';
interface IRequests {
    ReferenceType: string,
    Status: string,
}

class AddReferenceTypesUseCase {
    constructor(private ReferenceTypeRepository: IReferenceTypeRepository) { }

    async execute({ ReferenceType, Status }: IRequests): Promise<any> {
        try {
            // const deleteReferenceType:any = await this.ReferenceTypeRepository.deleteReferenceType({ ReferenceTypeId: 'af9007e4-f9e3-4451-82cd-323b0008ad2f' })
            const findReferenceType = await this.ReferenceTypeRepository.findReferenceType({ ReferenceType })
            if(findReferenceType){
                return {
                    Status: false,
                    message: `${ReferenceType} Reference type is already exits...`,
                    data: {}
                };
            }

            const AddReferenceTypes = await this.ReferenceTypeRepository.addReferenceTypes({ ReferenceType, Status })
            if (AddReferenceTypes == null) {
                return {
                    Status: false,
                    message: 'Something went wrong, Please try again later...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Reference types Add successfully...',
                    data: AddReferenceTypes
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
    AddReferenceTypesUseCase
}