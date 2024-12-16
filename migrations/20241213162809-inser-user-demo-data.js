'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const userData = [
            {name: 'Sarah', email: 'sarah@email.com', status: 'active', dob: '1984-11-05'}
        ];
        await queryInterface.bulkInsert('users', userData, {});
    },

    down: async (queryInterface, Sequelize) => {

    }
};
