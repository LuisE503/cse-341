const { MongoClient } = require('mongodb');

let db;

const initDb = (callback) => {
  if (db) {
    return callback(null, db);
  }

  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      db = client;
      callback(null, db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
};

const getDatabaseName = () => process.env.DB_NAME || 'campus_events_clubs';

module.exports = {
  initDb,
  getDb,
  getDatabaseName
};
