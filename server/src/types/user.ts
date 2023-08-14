import { Optional } from 'sequelize';

export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    profile_picture?: string | null;
    adult?: boolean | null;
  }
  
export interface CreateUserAttributes extends Optional<UserAttributes, 'id'> {}
export interface GetUserAttributes extends Omit<UserAttributes, 'password'> {}
  