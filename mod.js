const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user'); // Import user model

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/register', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    newUser.save()
        .then(() => res.status(200).send('User registered successfully'))
        .catch(err => res.status(400).send('Error registering user'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then(user => {
            if (!user) {
                res.status(401).send('Invalid credentials');
            } else {
                res.status(200).send('Login successful');
            }
        })
        .catch(err => res.status(400).send('Error logging in'));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
