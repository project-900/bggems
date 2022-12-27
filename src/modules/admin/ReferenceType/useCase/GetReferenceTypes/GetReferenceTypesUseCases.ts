import { IReferenceTypeRepository } from '../../repository/IReferenceTypeRepository';
interface IRequests {
    Status: string,
}

class GetReferenceTypesUseCase {
    constructor(private ReferenceTypeRepository: IReferenceTypeRepository) { }

    async execute({ Status }: IRequests): Promise<any> {
        try {
            const GetReferenceTypes = await this.ReferenceTypeRepository.getReferenceTypes({ Status })
            if (GetReferenceTypes.length == 0) {
                return {
                    Status: false,
                    message: 'No Reference types found...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Reference types get successfully...',
                    data: GetReferenceTypes
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
    GetReferenceTypesUseCase
}