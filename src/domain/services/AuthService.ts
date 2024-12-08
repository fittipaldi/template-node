import {Credentials} from '../value-objects/Credentials';

const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '1234';

export class AuthService {
    public validateCredentials(credentials: Credentials): boolean {
        return credentials.username === VALID_USERNAME && credentials.password === VALID_PASSWORD;
    }
}