import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class ReferenceTypes extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            ReferenceType:  DataTypes.STRING,
            OrdNo:  DataTypes.INTEGER,
            Status:  DataTypes.STRING,
        },{
            tableName: "ReferenceTypes",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { ReferenceTypes }