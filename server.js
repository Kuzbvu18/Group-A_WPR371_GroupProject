const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();

//Define Port
const PORT = process.env.PORT || 3009; // Supports hosting platforms + local dev

// View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Session Configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

// Global user for EJS
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Routes
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/eventRoutes'));
app.use('/', require('./routes/bookingRoutes'));
app.use('/', require('./routes/contactRoutes'));

// 404 Page
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page Not Found' });
});

// Global Error Handler
app.use(errorHandler);

// Start Server/ Listen to port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});