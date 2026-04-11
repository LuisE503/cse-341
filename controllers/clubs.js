const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');
const { validateClub } = require('../validators/clubs');

const clubsCollection = () =>
  mongodb.getDb().db(mongodb.getDatabaseName()).collection('clubs');

const normalizeClubPayload = (body) => {
  const payload = {
    name: body.name.trim(),
    category: body.category.trim(),
    description: body.description ? body.description.trim() : '',
    contactEmail: body.contactEmail ? body.contactEmail.trim().toLowerCase() : null,
    isActive: body.isActive !== undefined ? body.isActive : true
  };

  if (body.presidentUserId && ObjectId.isValid(body.presidentUserId)) {
    payload.presidentUserId = new ObjectId(body.presidentUserId);
  }

  return payload;
};

const getAll = async (req, res) => {
  try {
    const result = await clubsCollection().find();
    const clubs = await result.toArray();
    return res.status(200).json(clubs);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid club ID.' });
    }

    const id = new ObjectId(req.params.id);
    const result = await clubsCollection().findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ message: 'Club not found.' });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createClub = async (req, res) => {
  try {
    const validation = validateClub(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    if (req.body.presidentUserId && !ObjectId.isValid(req.body.presidentUserId)) {
      return res.status(400).json({ message: 'presidentUserId must be a valid ObjectId.' });
    }

    const payload = {
      ...normalizeClubPayload(req.body),
      createdAt: new Date()
    };

    const response = await clubsCollection().insertOne(payload);
    return res.status(201).json({ id: response.insertedId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateClub = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid club ID.' });
    }

    const validation = validateClub(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    if (req.body.presidentUserId && !ObjectId.isValid(req.body.presidentUserId)) {
      return res.status(400).json({ message: 'presidentUserId must be a valid ObjectId.' });
    }

    const id = new ObjectId(req.params.id);
    const payload = {
      ...normalizeClubPayload(req.body),
      updatedAt: new Date()
    };

    const response = await clubsCollection().updateOne({ _id: id }, { $set: payload });

    if (response.matchedCount === 0) {
      return res.status(404).json({ message: 'Club not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteClub = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid club ID.' });
    }

    const id = new ObjectId(req.params.id);
    const response = await clubsCollection().deleteOne({ _id: id });

    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'Club not found.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createClub,
  updateClub,
  deleteClub
};
