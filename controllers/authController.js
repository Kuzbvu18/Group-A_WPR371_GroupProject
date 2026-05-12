const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('register', { error: 'User already exists with this email!' });
    }

    await new User({ name, email, password }).save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('register', { error: 'Server error during registration' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.render('login', { error: 'Invalid email or password' });
    }

    // Save user info in session
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    // Redirect based on role
    if (user.role === 'admin') {
      res.redirect('/admin/events');
    } else {
      res.redirect('/');
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Server error' });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error(err);
    res.redirect('/');
  });
};