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
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Handle GET request to /api/books/{id}
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    // throw an error if book is not found
    if (!book) {
      throw Error(`Book with id ${id} not found`);
    }
    res.json({ success: true, data: book });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, error: `${error}` });
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
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // update any field of the book that has changed
    // creates a new entry if the book does not exist
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          authors: req.body.authors,
          pages: req.body.pages,
          publishedYear: req.body.publishedYear,
          genre: req.body.genre,
          imageURL: req.body.imageURL,
          read: req.body.read,
          favorite: req.body.favorite,
        },
      },
      { new: true }
    );

    res.json({ success: true, data: updatedBook });
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
