const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) query.title = new RegExp(search, 'i');
    if (category) query.category = category;

    const events = await Event.find(query).sort({ date: 1 });
    res.render('index', { events, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.render('index', { events: [], user: req.session.user, error: 'Failed to load events' });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).render('error', { message: 'Event not found' });
    res.render('event-detail', { event, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Server Error' });
  }
};

// ADMIN CRUD 

exports.getAdminEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.render('admin/events', { events, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Failed to load events' });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.redirect('/admin/events');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating event');
  }
};

// New: Update Event
exports.getEditEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    res.render('admin/edit-event', { event, user: req.session.user });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateEvent = async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/events');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating event');
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect('/admin/events');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting event');
  }
};