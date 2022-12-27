import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class UserRoles extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            UserId:  DataTypes.UUID,
            RoleId:  DataTypes.UUID,
        },{
            tableName: "UserRoles",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { UserRoles }