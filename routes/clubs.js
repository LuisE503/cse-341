const router = require('express').Router();
const clubsController = require('../controllers/clubs');

router.get('/', clubsController.getAll);
router.get('/:id', clubsController.getSingle);
router.post('/', clubsController.createClub);
router.put('/:id', clubsController.updateClub);
router.delete('/:id', clubsController.deleteClub);

module.exports = router;
