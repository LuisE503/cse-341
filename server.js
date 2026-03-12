require('dotenv').config();
const express = require('express');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/', require('./routes/index'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  }
});
