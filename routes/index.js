const router = require('express').Router();
const loginRoute = require('./login');
const authenticateToken = require('../auth/middleware/authenticateToken');

const db = require('../models');

router.use('/login', loginRoute);

router.post('/getSaveFiles', authenticateToken, (req, res)=> {
  res.status(200).end();
})

// router.post('/signup', async (req, res) => {
//   const signUpObj = await db.User.findOne({ username: req.params.username })
//   if (!signUpObj) {
//     const newSignUpObj = await db.User.create(req.body);
//     console.log(req.body);
//     res.json(newSignUpObj);
//   }
//     res.status(403).end();
// });

let signUpObj = '';

router.post('/signup', async (req, res) => {
    try {
      signUpObj = await db.User.findOne({ username: req.body.username })
    }
    catch(err) {
      console.log(err);
      res.status(401).end();
    }
    finally {
      if (!signUpObj) {
        const newSignUpObj = await db.User.create(req.body);
        console.log(req.body);
        res.json(newSignUpObj);
      }
        res.status(403).end();
    }
});

module.exports = router;