'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog_user = sequelize.define('blog_user', {
    user_id: DataTypes.STRING,
    password: DataTypes.STRING,
    user_nick: DataTypes.STRING
  }, {});
  blog_user.associate = function(models) {
    // associations can be defined here
  };
  return blog_user;
};