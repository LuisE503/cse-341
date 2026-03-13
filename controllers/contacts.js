const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const contactCollection = () => mongodb.getDb().db('project1').collection('contacts');

const validateContactBody = (body) => {
  const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'];
  const missing = requiredFields.filter((field) => !body[field] || String(body[field]).trim() === '');
  return { isValid: missing.length === 0, missing };
};

// GET all contacts
const getAll = async (req, res) => {
  try {
    const result = await contactCollection().find();
    result.toArray().then((contacts) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contacts);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single contact by ID
const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact ID.' });
    }

    const contactId = new ObjectId(req.params.id);
    const result = await contactCollection().find({ _id: contactId });
    result.toArray().then((contacts) => {
      if (!contacts[0]) {
        return res.status(404).json({ message: 'Contact not found.' });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contacts[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create contact
const createContact = async (req, res) => {
  try {
    const validation = validateContactBody(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        message: `All fields are required: ${validation.missing.join(', ')}`
      });
    }

    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await contactCollection().insertOne(contact);
    return res.status(201).json({ id: response.insertedId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUT update contact by ID
const updateContact = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact ID.' });
    }

    const validation = validateContactBody(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        message: `All fields are required: ${validation.missing.join(', ')}`
      });
    }

    const contactId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await contactCollection().replaceOne({ _id: contactId }, contact);
    if (response.matchedCount === 0) {
      return res.status(404).json({ message: 'Contact not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// DELETE contact by ID
const deleteContact = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact ID.' });
    }

    const contactId = new ObjectId(req.params.id);
    const response = await contactCollection().deleteOne({ _id: contactId });
    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'Contact not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };
