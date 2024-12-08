import {Request, Response} from 'express';
import {AuthService} from '../../../domain/services/AuthService';
import {Credentials} from '../../../domain/value-objects/Credentials'

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public checkAuth(req: Request, res: Response): void {
        const {username, password} = req.body;
        const credentials = new Credentials(username, password);

        if (this.authService.validateCredentials(credentials)) {
            res.status(200).send('Authentication successful');
        } else {
            res.status(401).send('Invalid username or password');
        }
    }
}