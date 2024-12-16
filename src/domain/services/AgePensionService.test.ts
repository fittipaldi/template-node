import { AgePensionService } from './AgePensionService';
import { AgePensions } from '../models/AgePensions';

// Mock the AgePensions model
jest.mock('../models/AgePensions');

describe('AgePensionService', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getPensionQtyByAge', () => {
        it('should return a pension record when found', async () => {
            const mockPension = { age: 65, pensionQty: 1500 };
            (AgePensions.findOne as jest.Mock).mockResolvedValue(mockPension);

            const pension = await AgePensionService.getPensionQtyByAge(65);
            expect(pension).toEqual(mockPension);
            expect(AgePensions.findOne).toHaveBeenCalledWith({
                where: {
                    age: 65,
                },
                attributes: ['age', 'pensionQty'],
            });
        });

        it('should return null when no pension record is found', async () => {
            (AgePensions.findOne as jest.Mock).mockResolvedValue(null);

            const pension = await AgePensionService.getPensionQtyByAge(70);
            expect(pension).toBeNull();
        });
    });
});