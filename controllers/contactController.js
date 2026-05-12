const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.render('contact', { 
      success: 'Your enquiry has been submitted successfully!', 
      user: req.session.user 
    });
  } catch (err) {
    console.error(err);
    res.render('contact', { 
      error: 'Failed to submit your enquiry', 
      user: req.session.user 
    });
  }
};

exports.getAdminContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.render('admin/contacts', { 
      contacts, 
      user: req.session.user 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};