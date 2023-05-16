`use strict`;

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Create Express Singleton - a single instance by design
const app = express();
const PORT = process.env.PORT;

// Middleware - a function that runs before the route handler
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of Life');
});

app.listen(PORT, () => console.log('Server up on', PORT));



