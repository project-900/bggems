import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class SalesPersonMaster extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id :{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            Name:  DataTypes.STRING,
            ShortName:  DataTypes.STRING,
            Status:  DataTypes.STRING,
        },{
            tableName: "SalesPersonMaster",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { SalesPersonMaster }