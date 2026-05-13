const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId,
          ref: 'User', required: true
        },
  event: { type: mongoose.Schema.Types.ObjectId,
           ref: 'Event', 
           required: true
         },
  quantity: { type: Number,
              required: true,
              min: 1
            },
  totalPrice: { type: Number,
                required: true
              },
  status: { type: String,
            enum: ['confirmed', 'cancelled'],
            default: 'confirmed'
          },
  bookingReference: { type: String,
                      unique: true,
                      default: () => Math.random().toString(36).substring(2, 10).toUpperCase()
                    } //purpose: a unique reference 
},
{ timestamps: true });

//presave that runs before the booking is save to the database

bookingSchema.pre('save', async function (next){
  const Event = mongoose.model('Event');
  const event = await Event.findById(this.event);

  if (!event) {
    throw new Error('Event not found.');
  }
  const availableTickets = event.capacity - event.ticketsSold; //check if there are enough tickets left

  if (this.quantity > availableTickets) {
    const error = new error('Overbooking Error: Only ${availableTickets} tickets are available!')
    return next(error);
  }

  event.ticketsSold += this.quantity; //update the Event's sold count, if the above is valid
  await event.save();

  next();
});

module.exports = mongoose.model('Booking', bookingSchema);