const express = require('express');
const router = express.Router();

// 1. Home Page / Event Listing [cite: 46]
router.get('/', (req, res) => {
    const events = []; // Placeholder for Database Engineer [cite: 25]
    res.render('index', {
        pageTitle: 'Home',
        activePage: 'home',
        events,
        user: req.session?.user || null
    });
});

// 2. Events Page (Search & Filtering) [cite: 38, 46]
router.get('/events', (req, res) => {
    res.render('events', {
        pageTitle: 'Upcoming Events',
        activePage: 'events',
        user: req.session?.user || null
    });
});

// 3. User Authentication: Login [cite: 33, 51]
router.get('/login', (req, res) => {
    res.render('login', {
        pageTitle: 'Sign In',
        activePage: 'auth',
        user: null,
        error_msg: '',
        success_msg: ''
    });
});

// 4. User Authentication: Registration [cite: 33, 51]
router.get('/register', (req, res) => {
    res.render('register', {
        pageTitle: 'Create Account',
        activePage: 'auth',
        user: null,
        error_msg: '',
        success_msg: ''
    });
});

// 5. Event Management: Admin CRUD UI [cite: 34, 56]
router.get('/admin-events', (req, res) => {
    res.render('admin_events', {
        pageTitle: 'Manage Events',
        activePage: 'admin',
        user: req.session?.user || null
    });
});

// 6. Booking & Dashboard Page [cite: 36, 61]
router.get('/bookings', (req, res) => {
    res.render('bookings', {
        pageTitle: 'My Bookings',
        activePage: 'bookings',
        user: req.session?.user || null
    });
});

// 7. Contact / Enquiry Management [cite: 37, 69]
router.get('/contact', (req, res) => {
    res.render('contact', {
        pageTitle: 'Contact Us',
        activePage: 'contact',
        user: req.session?.user || null
    });
});

// 8. Admin Inbox (Enquiry Management) [cite: 72]
router.get('/admin', (req, res) => {
    res.render('admin', {
        pageTitle: 'Admin Inbox',
        activePage: 'admin',
        user: req.session?.user || null
    });
});

module.exports = router;