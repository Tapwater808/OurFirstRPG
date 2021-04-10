const router = require('express').Router();
const loginRoute = require('./login');
const path = require("path");

router.use('/login', loginRoute);

router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
  