const Booking = require('../models/Booking');
const Event = require('../models/Event');

exports.bookTickets = async (req, res) => {
  try {
    const { eventId, quantity } = req.body;
    const qty = parseInt(quantity);

    if (!qty || qty < 1) {
      return res.redirect('/event/' + eventId);
    }

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).send('Event not found');

    if (event.availableTickets < qty) {
      return res.render('event-detail', { 
        event, 
        user: req.session.user, 
        error: `Only ${event.availableTickets} tickets left!` 
      });
    }

    const totalPrice = event.price * qty;

    await Booking.create({
      user: req.session.user.id,
      event: eventId,
      quantity: qty,
      totalPrice
    });

    event.availableTickets -= qty;
    await event.save();

    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Booking failed. Please try again.');
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.session.user.id })
      .populate('event')
      .sort({ createdAt: -1 });

    res.render('dashboard', { bookings, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Failed to load dashboard' });
  }
};