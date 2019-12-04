const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MDB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', () => {
  console.log('error occurred from the database');
});
db.once('open', () => {
  console.log('successfully connected to the database');
});

module.exports = mongoose;
