const jwt = require('jsonwebtoken');
const { privateKey } = require('../config/auth.json');
const db = require('../models');

const validateLogin = async ({ username, password }) => {
  const user = await db.User.findOne({
     username, password,
  });
  const all = await db.User.find({});
  // console.log(`validateLogin all: ${all}`)
  // console.log(`validateLogin user: ${user}`);
  if (!user) throw 'Unmatched credentials';
  return jwt.sign({ username }, privateKey);
};

module.exports = validateLogin;
