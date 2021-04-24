const router = require('express').Router();
const validateLogin = require('../auth/validateLogin');

const db = require('../models');

router.route('/')
  .post(async(req, res) => {
    const { username, password } = req.body;
    try {
      // Uncomment for testing. Note that username must be unique
      // await db.User.create({username, password});
      const token = await validateLogin({ username, password });
      res.cookie('access_token', `Bearer ${token}`);
      res.status(200).end();
    } catch(err) {
      console.log(err);
      res.status(401).end();
    };
  })
  .get((req, res, next) => next());

router.post('/signup', async (req, res) => {
  const signUpObj = await db.User.create(req.body);
  console.log(req.body);
  res.json(signUpObj);
});

module.exports = router;