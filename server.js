const express = require('express');
const app = express();
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const authenticateToken = require('./auth/middleware/authenticateToken');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('ourfirstrpg/build'));
// }
app.use(express.static(path.resolve(__dirname, 'ourfirstrpg/build')));

app.use(routes);

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'ourfirstrpg/build', 'index.html'))
);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ourfirstrpg');

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})