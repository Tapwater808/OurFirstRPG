const jwt = require('jsonwebtoken');
const { privateKey } = require('../../config/auth.json');
const db = require('../../models');

module.exports = (req, res, next) => {
  // const auth = req.headers.authorization;
  // const token = auth && auth.split(' ')[1];
  // console.log(JSON.stringify(req.cookies));
  const accessToken = req.cookies.access_token;
  const token = accessToken && accessToken.split(' ')[1];
  if (!token) res.json({error: "No token found"});

  jwt.verify(token, privateKey, async (err, user) => {
    if (err) return res.status(401).end();
    req.user = await db.User.findOne({ username: user.username });
    next();
  });
};
