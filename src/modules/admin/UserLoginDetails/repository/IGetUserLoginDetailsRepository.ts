interface IUserLoginDetailRepository {
    GetUserLoginDetails({Skip, Limit, WhereClause}:any): Promise<any>;
    AddUserLoginDetails({UserId, Ip, Longitude, Latitude, Country, Region, City, Date, Time, DeviceType}:any): Promise<any>;
}

export {
    IUserLoginDetailRepository
}

