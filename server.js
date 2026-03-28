require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const mongodb = require('./db/connect');
const swaggerDocument = require('./swagger.json');
const { initializePassport } = require('./config/passport');

const app = express();
const port = process.env.PORT || 8080;

initializePassport(passport);

app.set('trust proxy', 1);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'dev_session_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.status(200).send('W04 API is running with OAuth. Open /api-docs');
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
