import { IUserLoginDetailRepository } from '../../repository/IGetUserLoginDetailsRepository';
interface IRequests {
    Skip: string,
    Limit: string,
    WhereClause: string,
}

class GetUserLoginDetailsUseCase {
    constructor(private UserLoginDetailRepository: IUserLoginDetailRepository) { }

    async execute({ Skip, Limit, WhereClause }: IRequests): Promise<any> {
        try {
            const GetUserLoginDetails = await this.UserLoginDetailRepository.GetUserLoginDetails({ Skip, Limit, WhereClause })
            if (GetUserLoginDetails == null) {
                return {
                    Status: false,
                    message: 'No business types found...',
                    data: {}
                };
            } else {
                return {
                    Status: true,
                    message: 'Sales Persons get successfully...',
                    data: GetUserLoginDetails
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
    GetUserLoginDetailsUseCase
}