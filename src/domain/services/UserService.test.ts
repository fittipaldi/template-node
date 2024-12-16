import {UserService} from './UserService';
import {User} from '../models/User';
import {Sequelize} from 'sequelize';

// Mocking the User model
jest.mock('../models/User');

describe('UserService', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getUserById', () => {
        test('should return user data for valid ID', async () => {
            const mockUser = {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                status: 'active',
                dob: new Date('1990-01-01'),
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            (User.findOne as jest.Mock).mockResolvedValue(mockUser);
            const user = await UserService.getUserById(1);
            expect(user).toEqual(mockUser);
        });

        test('should return null for invalid ID', async () => {
            (User.findOne as jest.Mock).mockResolvedValue(null);
            const user = await UserService.getUserById(999);
            expect(user).toBeNull();
        });
    });

    describe('getOneRandomUser', () => {
        it('should return a random active user when found', async () => {
            const mockUser = {id: 1, status: 'active'};
            (User.findOne as jest.Mock).mockResolvedValue(mockUser);

            const user = await UserService.getOneRandomUser();
            expect(user).toEqual(mockUser);
            expect(User.findOne).toHaveBeenCalledWith({
                where: {
                    status: 'active',
                },
                order: Sequelize.fn('RAND'),
            });
        });
    });
});