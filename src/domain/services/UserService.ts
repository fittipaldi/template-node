import {User} from '../models/User';
import {Sequelize} from 'sequelize';

export class UserService {
    static async getUserById(id: number): Promise<User | null> {
        return await User.findOne({
            where: {
                id: id,
                status: 'active'
            },
        });
    }

    static async getOneRandomUser(): Promise<User | null> {
        return await User.findOne({
            where: {
                status: 'active'
            },
            order: Sequelize.fn('RAND')
        });
    }
}