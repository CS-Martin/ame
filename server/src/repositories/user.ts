import { User } from '../models'
import { CreateUserAttributes, GetUserAttributes } from '../types'

const create = async (payload: CreateUserAttributes): Promise<User> => {
    return await User.create(payload)
}

const update = async (id: number, payload: Partial<CreateUserAttributes>): Promise<User> => {
    const user = await User.findByPk(id)
    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedUser = await (user as User).update(payload)
    return updatedUser
}

const get = async (id: number): Promise<User> => {
    return await User.findByPk(id, { 
        attributes: {
            exclude: ['password', 'created_at', 'updated_at'],
        },
    });
}

const drop = async (id: number): Promise<boolean> => {
    const deletedUserCount = await User.destroy({
        where: {id}
    })
    return !!deletedUserCount
}

const list = async (attributes: GetUserAttributes): Promise<User[]> => {
    const users = await User.findAll({
      attributes: {
        exclude: ['password', 'created_at', 'updated_at'],
      },
    });
    return users;
  };

export default {
    create,
    update,
    get,
    drop,
    list
}