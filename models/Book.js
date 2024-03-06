const mongoose = require('mongoose');

const Book = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title.'],
  },
  authors: {
    type: [String],
    required: [true, 'Please enter one or more authors'],
  },
  pages: {
    type: Number,
  },
  publishedYear: {
    type: Number,
  },
  genre: {
    type: [String],
  },
  coverURL: {
    type: String,
  },
  blurb: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Book;
