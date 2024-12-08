"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../../../domain/services/AuthService");
const Credentials_1 = require("../../../domain/value-objects/Credentials");
class AuthController {
    authService;
    constructor() {
        this.authService = new AuthService_1.AuthService();
    }
    checkAuth(req, res) {
        const { username, password } = req.body;
        const credentials = new Credentials_1.Credentials(username, password);
        if (this.authService.validateCredentials(credentials)) {
            res.status(200).send('Authentication successful');
        }
        else {
            res.status(401).send('Invalid username or password');
        }
    }
}
exports.AuthController = AuthController;
