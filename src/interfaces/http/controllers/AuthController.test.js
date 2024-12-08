"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("./AuthController");
class MockAuthService {
    validateCredentials = jest.fn();
}
describe('AuthController', () => {
    let authController;
    let authService;
    let req;
    let res;
    beforeEach(() => {
        authService = new MockAuthService();
        authController = new AuthController_1.AuthController();
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
            json: jest.fn(),
        };
    });
    it('should return 200 for valid credentials', async () => {
        req.body = { username: 'admin', password: '1234' };
        authService.validateCredentials.mockReturnValue(true);
        authController.checkAuth(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should return 401 for invalid credentials', async () => {
        req.body = { username: 'admin', password: 'wrongPassword' };
        authService.validateCredentials.mockReturnValue(false);
        authController.checkAuth(req, res);
        expect(res.status).toHaveBeenCalledWith(401);
    });
});
