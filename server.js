require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongodb = require('./db/connect');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('W03 API is running. Open /api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`Connected to DB and listening on port ${port}`);
  });
});
