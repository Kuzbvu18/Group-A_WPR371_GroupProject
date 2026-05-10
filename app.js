const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());                          
app.use(express.urlencoded({ extended: true }));   

app.use(express.static(path.join(__dirname, 'public')));

const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).send('<h1>500 — Something went wrong</h1>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 — Page Not Found</h1><a href="/">Go Home</a>');
});

app.listen(PORT, () => {
    console.log(`Server is running live on http://localhost:${PORT}`);
});