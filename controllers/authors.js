const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');
const { validateAuthor } = require('../validators/authors');

const authorsCollection = () =>
  mongodb.getDb().db(mongodb.getDatabaseName()).collection('authors');

const getAll = async (req, res) => {
  try {
    const result = await authorsCollection().find();
    const authors = await result.toArray();
    return res.status(200).json(authors);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid author ID.' });
    }

    const id = new ObjectId(req.params.id);
    const result = await authorsCollection().findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ message: 'Author not found.' });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const validation = validateAuthor(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    const response = await authorsCollection().insertOne(req.body);
    return res.status(201).json({ id: response.insertedId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid author ID.' });
    }

    const validation = validateAuthor(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    // MongoDB does not allow replacing immutable _id field.
    const { _id, ...authorData } = req.body;

    const id = new ObjectId(req.params.id);
    const response = await authorsCollection().replaceOne({ _id: id }, authorData);

    if (response.matchedCount === 0) {
      return res.status(404).json({ message: 'Author not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid author ID.' });
    }

    const id = new ObjectId(req.params.id);
    const response = await authorsCollection().deleteOne({ _id: id });

    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'Author not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createAuthor,
  updateAuthor,
  deleteAuthor
};
