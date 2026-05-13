const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, 
          required: true,
          trim: true //removes accidental whitespace
        },
  email: { type: String,
           required: true,
           unique: true,
           lowercase: true,
           trim: true
          },
  password: { type: String,
              required: true
            },
  role: { type: String,
          enum: ['user', 'admin'],
          default: 'user'
        }
}, 
{ timestamps: true });

//password hashing
//password encrypted before it is saved to MongoDB

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); //only hashes the password if it has been modified (or the password is new)

  try{
  this.password = await bcrypt.hash(this.password, 10);
  next();
  } catch (err) {
    next(err); //passes any hashing errors to the error-handling middleware
  }
});

//used by controller to verify passwords during login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);