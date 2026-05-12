const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const eventController = require('../controllers/eventController');

//  PUBLIC ROUTES 
router.get('/', eventController.getAllEvents);
router.get('/event/:id', eventController.getEventById);

// ADMIN ROUTES 
router.get('/admin/events', isAdmin, eventController.getAdminEvents);
router.post('/admin/events', isAdmin, eventController.createEvent);

// Edit Event
router.get('/admin/events/edit/:id', isAdmin, eventController.getEditEvent);
router.post('/admin/events/edit/:id', isAdmin, eventController.updateEvent);

// Delete Event
router.post('/admin/events/delete/:id', isAdmin, eventController.deleteEvent);

module.exports = router;