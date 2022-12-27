import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class BusinessTypes extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            BusinessType:  DataTypes.STRING,
            OrdNo:  DataTypes.INTEGER,
            Status:  DataTypes.STRING,
        },{
            tableName: "BusinessTypes",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { BusinessTypes }