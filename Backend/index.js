const express = require('express');
const database = require('./config/connection.js');
require('dotenv').config();
const cors = require('cors');


const app = express();
const port = process.env.PORT||5000

app.use(express.json());
app.use(cors());
database();


app.use('/user',require("./router/userrouter"));
app.use('/admin',require("./router/adminrouter"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})