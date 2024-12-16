import {User} from '../models/User'

export class UserResponse {

    public getUsersAsJson(user: User, age: number, ordinalAge: string, pensionQty: number): object {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            dob: user.dob,
            age: age,
            ordinal_age: ordinalAge,
            pension_qty: pensionQty
        };
    }
}