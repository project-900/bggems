import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class VerificationTokens extends Model {
    static init(sequelize: Sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            UserId: DataTypes.UUID,
            Email: DataTypes.STRING,
            Token: DataTypes.STRING,
            Date: DataTypes.STRING,
            Time: DataTypes.STRING,
            Status:  DataTypes.STRING,
        },{
            tableName: "VerificationTokens",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { VerificationTokens }