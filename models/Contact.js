const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String,
          required: true
        },
  email: { type: String,
           required: true
         },
  subject: { type: String,
             required: true
           },
  message: { type: String,
             required: true 
           },
  status: { type: String,
            enum: ['pending', 'resolved'],
            default: 'pending'
          },
  category: { type: String,
              enum: ['General Entry', 'Ticket Support', 'Event Hosting', 'Other'],
              default: 'General Entry'
  }    // purpose of category: to assist admins filter enquires
}, 
{ timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);

