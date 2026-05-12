const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');
const bookingController = require('../controllers/bookingController');

router.get('/dashboard', isAuthenticated, bookingController.getDashboard);
router.post('/book', isAuthenticated, bookingController.bookTickets);

module.exports = router;