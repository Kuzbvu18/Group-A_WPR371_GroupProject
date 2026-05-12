const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth');
const contactController = require('../controllers/contactController');

router.get('/contact', (req, res) => res.render('contact'));
router.post('/contact', contactController.submitContact);

router.get('/admin/contacts', isAdmin, contactController.getAdminContacts);

module.exports = router;