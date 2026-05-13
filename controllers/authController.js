const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/User");

const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true } 
}));

exports.register = async (req, res) => {

try {

const errors = validationResult(req);

if (!errors.isEmpty()) {
return res.status(400).json({
errors: errors.array()
});
}

const { username, email, password } = req.body;

const existingUser = await User.findOne({ email });

if (existingUser) {
return res.status(400).send("Account already exists");
}

const hashedPassword = await bcrypt.hash(password, 10);

const { name, email, password } = req.body;
const user = new User({
name,
email,
password: hashedPassword
});

await user.save();

res.redirect("/login");

} catch (err) {
console.error(err.message);
res.status(500).send("Server Error");
}
};

exports.login = async (req, res) => {

try {

const errors = validationResult(req);

if (!errors.isEmpty()) {
return res.status(400).json({
errors: errors.array()
});
}

const { email, password } = req.body;

const user = await User.findOne({ email });

if (!user) {
return res.status(400).send("Invalid credentials");
}

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
return res.status(400).send("Invalid credentials");
}

req.session.user = {
id: user._id,
username: user.username,
role: user.role
};

res.redirect("/");

} catch (err) {
console.error(err.message);
res.status(500).send("Server Error");
}
};

exports.logout = (req, res) => {

req.session.destroy((err) => {

if (err) {
return res.status(500).send("Logout failed");
}

res.clearCookie("connect.sid");
res.redirect("/login");
});
};
