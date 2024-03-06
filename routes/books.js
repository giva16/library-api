const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// book schema from mongoose with methods to mutate mongoDB collection documents
const bookSchema = require('../models/Book');

const Book = mongoose.model('Book', bookSchema);

// example book document
async function createExampleBook() {
  const book1 = new Book({
    title: 'Harry Potter and The Order of Pheonix',
    authors: ['J.K. Rowling'],
    pages: 300,
    publishedYear: 2001,
  });

  await book1.save();
}
// Handle GET request to /api/books
router.get('/', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful GET request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

// Handle GET request to /api/books/{id}
router.get('/:id', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful GET request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

// Handle POST request to /api/books
router.post('/', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful POST request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

// Handle PUT request to /api/books/{id}
router.put('/:id', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful PUT request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

// Handle DELETE request to /api/books/{id}
router.delete('/:id', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful DELETE request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

module.exports = router;
