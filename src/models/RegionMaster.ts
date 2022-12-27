import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class RegionMaster extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id :{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            RegionName:  DataTypes.STRING,
            ShortName:  DataTypes.STRING,
            CountryId:  DataTypes.UUID,
            Status:  DataTypes.STRING,
        },{
            tableName: "RegionMaster",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { RegionMaster }