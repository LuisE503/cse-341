const router = require('express').Router();
const contactsController = require('../controllers/contacts');

// GET /contacts  --> returns ALL contacts
router.get('/', contactsController.getAll);

// GET /contacts/:id  --> returns a SINGLE contact by ID
router.get('/:id', contactsController.getSingle);

// POST /contacts  --> creates a NEW contact
router.post('/', contactsController.createContact);

// PUT /contacts/:id  --> updates an EXISTING contact by ID
router.put('/:id', contactsController.updateContact);

// DELETE /contacts/:id  --> deletes a contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
