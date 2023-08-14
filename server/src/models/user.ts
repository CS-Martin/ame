import { DataTypes, Model } from 'sequelize';

import sequelize from '../config';

import { UserAttributes, CreateUserAttributes } from '../types'

class User extends Model<UserAttributes, CreateUserAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public profile_picture?: string | null;
    public adult?: boolean | null;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    profile_picture: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    adult: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    modelName: 'User',
    tableName: 'users',
    paranoid: true, // Soft delete
    sequelize: sequelize
})

User.sync()

export default User;