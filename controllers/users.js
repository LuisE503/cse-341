const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');
const { validateUser, validRoles } = require('../validators/users');

const usersCollection = () =>
  mongodb.getDb().db(mongodb.getDatabaseName()).collection('users');

const normalizeUserPayload = (body) => ({
  fullName: body.fullName.trim(),
  email: body.email.trim().toLowerCase(),
  role: body.role,
  passwordHash: body.passwordHash,
  isActive: body.isActive !== undefined ? body.isActive : true
});

const getAll = async (req, res) => {
  try {
    const result = await usersCollection().find();
    const users = await result.toArray();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid user ID.' });
    }

    const id = new ObjectId(req.params.id);
    const result = await usersCollection().findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const validation = validateUser(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    const payload = {
      ...normalizeUserPayload(req.body),
      createdAt: new Date()
    };

    const existing = await usersCollection().findOne({ email: payload.email });
    if (existing) {
      return res.status(400).json({ message: 'A user with this email already exists.' });
    }

    const response = await usersCollection().insertOne(payload);
    return res.status(201).json({ id: response.insertedId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid user ID.' });
    }

    const validation = validateUser(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    if (!validRoles.includes(req.body.role)) {
      return res.status(400).json({ message: 'Invalid role value.' });
    }

    const id = new ObjectId(req.params.id);
    const payload = {
      ...normalizeUserPayload(req.body),
      updatedAt: new Date()
    };

    const existingByEmail = await usersCollection().findOne({
      email: payload.email,
      _id: { $ne: id }
    });

    if (existingByEmail) {
      return res.status(400).json({ message: 'Another user already uses this email.' });
    }

    const response = await usersCollection().updateOne({ _id: id }, { $set: payload });

    if (response.matchedCount === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid user ID.' });
    }

    const id = new ObjectId(req.params.id);
    const response = await usersCollection().deleteOne({ _id: id });

    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};
