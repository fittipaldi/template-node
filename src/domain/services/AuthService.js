"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '1234';
class AuthService {
    validateCredentials(credentials) {
        return credentials.username === VALID_USERNAME && credentials.password === VALID_PASSWORD;
    }
}
exports.AuthService = AuthService;
