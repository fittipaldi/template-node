import {AuthService} from './AuthService';
import {Credentials} from '../value-objects/Credentials';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {
        authService = new AuthService();
    });

    it('should validate correct credentials', () => {
        const credentials = new Credentials('admin', '1234');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(true);
    });

    it('should not validate incorrect username', () => {
        const credentials = new Credentials('wrongUser', '1234');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(false);
    });

    it('should not validate incorrect password', () => {
        const credentials = new Credentials('admin', 'wrongPassword');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(false);
    });

    it('should not validate incorrect username and password', () => {
        const credentials = new Credentials('wrongUser', 'wrongPassword');
        const result = authService.validateCredentials(credentials);
        expect(result).toBe(false);
    });
});