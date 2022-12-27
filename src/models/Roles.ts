import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class Roles extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            RoleName:  DataTypes.STRING,
            Status:  DataTypes.STRING,
        },{
            tableName: "Roles",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { Roles }