import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class CityMaster extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id:  {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            CityName: DataTypes.UUID,
            CountryId: DataTypes.UUID,
            RegionId: DataTypes.STRING,
            TimeZone: DataTypes.STRING,
            Status: DataTypes.STRING,
        },{
            tableName: "CityMaster",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { CityMaster }