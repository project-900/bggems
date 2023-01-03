import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class CountryMaster extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            CountryName:  DataTypes.STRING,
            ShortName:  DataTypes.STRING,
            CountryCode:  DataTypes.STRING,
            Continent:  DataTypes.STRING,
            Status:  DataTypes.STRING,
        },{
            tableName: "CountryMaster",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { CountryMaster }