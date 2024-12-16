import {Model, DataTypes} from 'sequelize';
import sequelize from '../../config/db';

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public status!: string;
    public dob!: Date;
    public createdAt!: Date;
    public updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'updated_at'
        },
    },
    {
        sequelize,
        tableName: 'users',
    }
);