import {Request, Response} from 'express';
import {UserService} from '../../../domain/services/UserService';
import {HttpResponse} from "../../../domain/responses/HttpResponse";
import {UserResponse} from "../../../domain/responses/UserResponse";
import {AgePensionService} from "../../../domain/services/AgePensionService";
import {User} from "../../../domain/models/User";
import {calculateAge, toOrdinal} from "../../../utils/util";


export class UserController {
    private httpResponse: HttpResponse;
    private userResponse: UserResponse;

    constructor() {
        this.httpResponse = new HttpResponse();
        this.userResponse = new UserResponse();
    }

    public getUser(req: Request, res: Response): void {
        const userId = parseInt(req.params.id);
        UserService.getUserById(userId).then((user) => {
            console.log(user);
            if (user) {
                this._renderUser(user, res)
            } else {
                res.status(404).json(this.httpResponse.messenger('User not found!'));
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(this.httpResponse.messenger('Internal Error'));
        })
    }

    public getOneRandomUser(req: Request, res: Response): void {
        UserService.getOneRandomUser().then((user) => {
            console.log(user);
            if (user) {
                this._renderUser(user, res)
            } else {
                res.status(404).json(this.httpResponse.messenger('No users found!'));
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(this.httpResponse.messenger('Internal Error'));
        })
    }

    private _renderUser(user: User, res: Response): void {
        const age = calculateAge(user.dob)
        const ordinalAge = toOrdinal(age)
        AgePensionService.getPensionQtyByAge(age).then((agePension) => {
            const pensionQty = agePension?.pensionQty || 0
            res.json(this.httpResponse.success(this.userResponse.getUsersAsJson(user, age, ordinalAge, pensionQty)));
        }).catch((err) => {
            console.log(err);
            res.status(500).json(this.httpResponse.messenger('Internal Error'));
        })
    }

}