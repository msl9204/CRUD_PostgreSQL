"use strict";
module.exports = (sequelize, DataTypes) => {
    const test_table = sequelize.define(
        "test_table",
        {
            user_id: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {}
    );
    test_table.associate = function (models) {
        // associations can be defined here
    };
    return test_table;
};
