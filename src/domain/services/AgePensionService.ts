import {AgePensions} from '../models/AgePensions';

export class AgePensionService {
    static async getPensionQtyByAge(age: number): Promise<AgePensions | null> {
        return await AgePensions.findOne({
            where: {
                age: age
            },
            attributes: ['age', 'pensionQty']
        });
    }

}