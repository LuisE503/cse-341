const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/clubs', require('./clubs'));

module.exports = router;
