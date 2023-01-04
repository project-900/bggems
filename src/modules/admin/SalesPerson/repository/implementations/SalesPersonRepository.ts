import { ISalesPersonRepository } from '../ISalesPersonRepository';
import { SalesPersonMaster } from '../../../../../models/SalesPersonMaster';

class SalesPersonRepository implements ISalesPersonRepository {

    // Get all business types
    async getSalesPersons({ Status }: any): Promise<any> {
        let whereClause = {}
        if(Status == 'active'){
            whereClause = { Status: Status } 
        } 
        const result = await SalesPersonMaster.findAll({
            attributes: {
                exclude: ['Status', 'createdAt', 'updatedAt']
            },
            where: whereClause,
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all business types
    async findSalesPerson({ Name, ShortName }: any): Promise<any> {
        try{
            const result = await SalesPersonMaster.findOne({
                where : {
                    Name: Name, 
                    ShortName: ShortName,
                }
            });
    
            if (result) {
                return result
            } else {
                return null
            }
        }catch{
            return null
        }
    }

    // Add all business types
    async addSalesPersons({ Name, ShortName, Status }: any): Promise<any> {

        console.log({
            Name: Name, 
            ShortName: ShortName,
            Status: Status
        });
        
        const result = await SalesPersonMaster.create({
            Name: Name, 
            ShortName: ShortName,
            Status: Status
        });

        if (result) {
            return result
        } else {
            return null
        }
    }

    // Add all business types
    async deleteSalesPerson({ SalesPersonId }: any): Promise<any> {

        const result = await SalesPersonMaster.destroy({
            where: {
                Id: SalesPersonId,
            }
        });

        if (result) {
            return result
        } else {
            return null
        }
    }


}

export {
    SalesPersonRepository
}
