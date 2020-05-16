"use strict";
module.exports = (sequelize, DataTypes) => {
    const contents_table = sequelize.define(
        "contents_table",
        {
            user_id: { type: DataTypes.STRING, allowNull: false, unique: true },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            contents: DataTypes.STRING,
            title: { type: DataTypes.STRING, allowNull: false },
        },
        {}
    );
    contents_table.associate = function (models) {
        // associations can be defined here
    };
    return contents_table;
};
