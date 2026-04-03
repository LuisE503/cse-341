const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');
const { validateBook } = require('../validators/books');

const booksCollection = () =>
  mongodb.getDb().db(mongodb.getDatabaseName()).collection('books');

const getAll = async (req, res) => {
  try {
    const result = await booksCollection().find();
    const books = await result.toArray();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid book ID.' });
    }

    const id = new ObjectId(req.params.id);
    const result = await booksCollection().findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const validation = validateBook(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    const response = await booksCollection().insertOne(req.body);
    return res.status(201).json({ id: response.insertedId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid book ID.' });
    }

    const validation = validateBook(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    // MongoDB does not allow replacing immutable _id field.
    const { _id, ...bookData } = req.body;

    const id = new ObjectId(req.params.id);
    const response = await booksCollection().replaceOne({ _id: id }, bookData);

    if (response.matchedCount === 0) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid book ID.' });
    }

    const id = new ObjectId(req.params.id);
    const response = await booksCollection().deleteOne({ _id: id });

    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createBook,
  updateBook,
  deleteBook
};
