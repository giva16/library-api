const mongoose = require('mongoose');

const Book = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title.'],
  },
  authors: {
    type: [String],
    required: [true, 'Please enter a title.'],
  },
});
