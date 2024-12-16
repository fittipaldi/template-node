'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('age_pensions', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            pension_qty: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('age_pensions');
    }
};
