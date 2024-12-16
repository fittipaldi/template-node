import {Model, DataTypes} from 'sequelize';
import sequelize from '../../config/db';

export class AgePensions extends Model {
    public id!: number;
    public age!: number;
    public pensionQty!: number;
}

AgePensions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pensionQty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'pension_qty',
        },
    },
    {
        sequelize,
        tableName: 'age_pensions',
    }
);