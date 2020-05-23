"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn("contents_tables", "contents", {
            type: Sequelize.TEXT,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn("contents_tables", "contents", {
            type: Sequelize.STRING,
        });
    },
};
