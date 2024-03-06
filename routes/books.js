const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// book schema from mongoose with methods to mutate mongoDB collection documents
const Book = require('../models/Book');

// Handle GET request to /api/books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json({ success: true, data: books });
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
router.post('/', async (req, res) => {
  // create a new book document, with each field filled by body of request
  const book = new Book({
    title: req.body.title,
    authors: req.body.authors,
    pages: req.body.pages,
    publishedYear: req.body.publishedYear,
    genre: req.body.genre,
    imageURL: req.body.imageURL,
    blurb: req.body.blurb,
    read: req.body.read,
    favorite: req.body.favorite,
  });

  try {
    //insert book into database
    const savedBook = await book.save();
    res.json({ success: true, data: savedBook });
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
