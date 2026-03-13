require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongodb = require('./db/connect');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Contacts API is running. Visit /api-docs for documentation.');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
