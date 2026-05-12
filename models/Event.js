const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  capacity: { type: Number, required: true, min: 1 },
  availableTickets: { type: Number, required: true, min: 0 },
  image: { type: String, default: '/images/default.jpg' }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);