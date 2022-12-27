interface ISendMailRepository {
    sendMail({ Email, Subject, Template, Body, }:any): Promise<any>;
}

export {
    ISendMailRepository
}