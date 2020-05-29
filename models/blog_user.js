"use strict";
module.exports = (sequelize, DataTypes) => {
    const blog_user = sequelize.define(
        "blog_user",
        {
            user_id: { type: DataTypes.STRING, allowNull: false, unique: true },
            password: { type: DataTypes.STRING, allowNull: false },
            user_nick: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        { timestamps: true, updatedAt: false }
    );
    blog_user.associate = function (models) {
        // associations can be defined here
    };
    return blog_user;
};
