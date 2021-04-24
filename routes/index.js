const router = require('express').Router();
const loginRoute = require('./login');
const path = require("path");
const authenticateToken = require('../auth/middleware/authenticateToken');

const db = require('../models');

router.use('/login', loginRoute);

router.post('/getSaveFiles', authenticateToken, (req, res)=> {
  res.status(200).end();
})

router.post('/signup', async (req, res) => {
  const signUpObj = await db.User.create(req.body);
  console.log(req.body);
  res.json(signUpObj);
});

router.use((req, res) => res.sendFile(path.join(__dirname, "../ourfistrpg/build/index.html")));

module.exports = router;
  