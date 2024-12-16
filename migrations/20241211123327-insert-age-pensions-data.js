'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const agePensionsData = [
            {age: 16, pension_qty: 0},
            {age: 17, pension_qty: 0},
            {age: 18, pension_qty: 0},
            {age: 19, pension_qty: 0},
            {age: 20, pension_qty: 1},
            {age: 21, pension_qty: 1},
            {age: 22, pension_qty: 1},
            {age: 23, pension_qty: 1},
            {age: 24, pension_qty: 1},
            {age: 25, pension_qty: 2},
            {age: 26, pension_qty: 2},
            {age: 27, pension_qty: 2},
            {age: 28, pension_qty: 2},
            {age: 29, pension_qty: 2},
            {age: 30, pension_qty: 3},
            {age: 31, pension_qty: 3},
            {age: 32, pension_qty: 3},
            {age: 33, pension_qty: 3},
            {age: 34, pension_qty: 3},
            {age: 35, pension_qty: 4},
            {age: 36, pension_qty: 4},
            {age: 37, pension_qty: 4},
            {age: 38, pension_qty: 4},
            {age: 39, pension_qty: 4},
            {age: 40, pension_qty: 5},
            {age: 41, pension_qty: 5},
            {age: 42, pension_qty: 5},
            {age: 43, pension_qty: 5},
            {age: 44, pension_qty: 5},
            {age: 45, pension_qty: 6},
            {age: 46, pension_qty: 6},
            {age: 47, pension_qty: 6},
            {age: 48, pension_qty: 6},
            {age: 49, pension_qty: 6},
            {age: 50, pension_qty: 7},
            {age: 51, pension_qty: 7},
            {age: 52, pension_qty: 7},
            {age: 53, pension_qty: 7},
            {age: 54, pension_qty: 7},
            {age: 55, pension_qty: 8},
            {age: 56, pension_qty: 8},
            {age: 57, pension_qty: 8},
            {age: 58, pension_qty: 8},
            {age: 59, pension_qty: 8},
            {age: 60, pension_qty: 9},
            {age: 61, pension_qty: 9},
            {age: 62, pension_qty: 9},
            {age: 63, pension_qty: 9},
            {age: 64, pension_qty: 9},
            {age: 65, pension_qty: 10},
            {age: 66, pension_qty: 10},
            {age: 67, pension_qty: 10},
            {age: 68, pension_qty: 10},
            {age: 69, pension_qty: 10},
            {age: 70, pension_qty: 11},
            {age: 71, pension_qty: 11},
            {age: 72, pension_qty: 11},
            {age: 73, pension_qty: 11},
            {age: 74, pension_qty: 11},
            {age: 75, pension_qty: 12}
        ];

        await queryInterface.bulkInsert('age_pensions', agePensionsData, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('age_pensions', null, {});
    }
};
