const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

const uri = process.env.MLAB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to MDB'));
db.on('error', err => console.log(err));

app.listen(port, () => console.log(`Server started on ${port}`));
