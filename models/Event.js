const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String,
           required: true
         },
  description: { type: String,
                 required: true
               },
  date: { type: Date,
          required: true
        },
  location: { type: String,
              required: true
            },
  category: { type: String,
              required: true
            },
  price: { type: Number,
           required: true,
           min: 0
         },
  capacity: { type: Number,
              required: true,
              min: 1
            },
  availableTickets: { type: Number,
                      required: true,
                      min: 0
                    },
  ticketsSold: { type: Number,
                 default: 0
               },
  image: { type: String,
           default: '/images/default.jpg'
          }
}, 
{ timestamps: true });

//when a new even is created, availableTickets will be set to match capacity

eventSchema.pre('save', function (next) {
if (this.isNew) {
  this.availableTickets = this.capacity;
}
next();
});

module.exports = mongoose.model('Event', eventSchema);