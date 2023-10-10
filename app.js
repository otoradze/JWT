const express = require('express');
const app = express();

require('dotenv').config();
const connectDB = require('./db/connect');

const tasks = require('./routes/tasks');
const auth = require('./routes/auth');

// middleware
app.use(express.json());
app.use(tasks);
app.use(auth);
// ===================

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log('server is listening on 3000 port'));
  } catch (error) {
    console.log(error);
  }
};

start();
