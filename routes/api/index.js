const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('./thoughtRoutes', thoughtRoutes);
router.use('./userRoutes', userRoutes);

module.exports = router;