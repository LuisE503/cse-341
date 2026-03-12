const router = require('express').Router();
const contactsController = require('../controllers/contacts');

// GET /contacts  --> returns ALL contacts
router.get('/', contactsController.getAll);

// GET /contacts/:id  --> returns a SINGLE contact by ID
router.get('/:id', contactsController.getSingle);

module.exports = router;
