`use strict`;

const express = require('express');
const cors = require('cors');

// Create Express Singleton - a single instance by design
const app = express();


// Middleware - a function that runs before the route handler
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of Life');
});

app.get('/success', (req, res, next) => {
  res.status(200).send('Success');
});

app.get('/bad', (req, res, next) => {
  res.status(500).send('We Have an Error!');
});

app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

const start = (port) => app.listen(port, () => console.log('Server up on', port));

// Exports - allows other files to use this file
module.exports = { start, app };
