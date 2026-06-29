const { users } = require('../models/user.model');

let nextUserId = users.length + 1;

exports.getAllUsers = () => users;

exports.createUser = (payload) => {
  const newUser = {
    id: nextUserId++,
    ...payload
  };

  users.push(newUser);
  return newUser;
};
