"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = require("./AuthService");
const Credentials_1 = require("../value-objects/Credentials");
describe('AuthService', () => {
    let authService;
    beforeEach(() => {
        authService = new AuthService_1.AuthService();
    });
    it('should validate correct credentials', () => {
        const credentials = new Credentials_1.Credentials('admin', '1234');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(true);
    });
    it('should not validate incorrect username', () => {
        const credentials = new Credentials_1.Credentials('wrongUser', '1234');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(false);
    });
    it('should not validate incorrect password', () => {
        const credentials = new Credentials_1.Credentials('admin', 'wrongPassword');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(false);
    });
    it('should not validate incorrect username and password', () => {
        const credentials = new Credentials_1.Credentials('wrongUser', 'wrongPassword');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(false);
    });
});
