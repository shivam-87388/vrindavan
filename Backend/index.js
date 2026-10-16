const express = require('express');
const database = require('./config/connection.js');
require('dotenv').config();
const app = express();

const port = process.env.PORT||5000


database();


app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})