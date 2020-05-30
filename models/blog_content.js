"use strict";
module.exports = (sequelize, DataTypes) => {
    const blog_content = sequelize.define(
        "blog_content",
        {
            title: { type: DataTypes.STRING, allowNull: false },
            contents: { type: DataTypes.TEXT },
            img: { type: DataTypes.BLOB },
        },
        {}
    );
    blog_content.associate = function (models) {
        // associations can be defined here
    };
    return blog_content;
};
