import {AuthController} from './AuthController';
import {Request, Response} from 'express';

class MockAuthService {
    validateCredentials = jest.fn();
}

describe('AuthController', () => {
    let authController: AuthController;
    let authService: MockAuthService;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        authService = new MockAuthService();
        authController = new AuthController();
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
            json: jest.fn(),
        };
    });

    it('should return 200 for valid credentials', async () => {
        req.body = {username: 'admin', password: '1234'};
        authService.validateCredentials.mockReturnValue(true);

        authController.checkAuth(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return 401 for invalid credentials', async () => {
        req.body = {username: 'admin', password: 'wrongPassword'};
        authService.validateCredentials.mockReturnValue(false);

        authController.checkAuth(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(401);
    });
});