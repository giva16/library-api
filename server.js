// import modules
const express = require('express');
require('dotenv').config();

// get port number from .env file with dotenv
const PORT = process.env.PORT;

// intitialize express server
const app = express();

// Body parser middleware, parses incoming payload (client -> server)
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});

// Connect server to books router
const booksRouter = require('./routes/books');

// set /api/books as root for books router
app.use('/api/books', booksRouter);
