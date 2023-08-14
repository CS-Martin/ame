import { UserRepository } from '../repositories';

import { CreateUserAttributes, GetUserAttributes } from '../types';

import { User } from '../models';

const register = async (payload: CreateUserAttributes): Promise<User> => {
  console.log('serivces')
  return UserRepository.create(payload);
};

const update = async (id: number, payload: Partial<CreateUserAttributes>): Promise<User> => {
  const user = await UserRepository.get(id);
  if (!user) {
    throw new Error('User not found');
  }
  return UserRepository.update(id, payload);
};

const get = async (id: number): Promise<User> => {
  return UserRepository.get(id);
};

const drop = async (id: number): Promise<boolean> => {
  return UserRepository.drop(id);
};

const list = async (attributes: GetUserAttributes): Promise<User[]> => {
  return UserRepository.list(attributes);
};

export default {
    register,
    update,
    get,
    drop,
    list
}