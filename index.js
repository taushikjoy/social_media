const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connection seccessfull');
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('welcome');
});
app.listen(8800, () => {
  console.log('server started');
});
