"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "test_tables",
            [
                {
                    user_id: "Park A",
                    password: "aaaaabbb",
                    createdAt: "2018-01-01",
                    updatedAt: "2020-05-16",
                },
                {
                    user_id: "Kim B",
                    password: "qwerty",
                    createdAt: "2018-01-01",
                    updatedAt: "2020-05-12",
                },
                {
                    user_id: "Lee C",
                    password: "123111",
                    createdAt: "2019-01-01",
                    updatedAt: "2020-05-15",
                },
                {
                    user_id: "Adams",
                    password: "qqwweerr",
                    createdAt: "2018-01-01",
                    updatedAt: "2020-05-12",
                },
                {
                    user_id: "Joe",
                    password: "zzzzzssass",
                    createdAt: "2013-01-01",
                    updatedAt: "2020-05-16",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    },
};
