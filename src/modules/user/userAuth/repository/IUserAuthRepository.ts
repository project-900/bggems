interface IUserAuthRepository {
    login({ Username }:any): Promise<any>;
    registration({FirstName, LastName, Username, Email, MobileNo, Password, BusinessTypeId, CompanyName, CompanyAddress, CountryCode, OfficePhoneCountryCode, OfficePhoneNumber, CountryId, RegionId, CityId, ZipCode, ReferenceId, SalesPersonId, Image }:any): Promise<any>;
    createUserRole({ UserId, RoleId }:any): Promise<any>;
    verifyUser({ UserId, Verify }:any): Promise<any>;
    findUsername({ Username }:any): Promise<any>;
    findUser({ UserId }:any): Promise<any>;
    findEmailUser({ Email }:any): Promise<any>;
    resetPassword({ Token, Password }:any): Promise<any>;
    forgotPasswordRequest({ Email }:any): Promise<any>;
    verifyToken({ Token }:any): Promise<any>;
    encryptPassword({ Password }: any): Promise<any>;
}

export {
    IUserAuthRepository
}