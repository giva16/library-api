const express = require('express');

const router = express.Router();

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
    res.json({ success: true, data: 'Sucessful GET request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

// Handle PUT request to /api/books/{id}
router.put('/:id', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful GET request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});

// Handle DELETE request to /api/books/{id}
router.delete('/:id', (req, res) => {
  try {
    res.json({ success: true, data: 'Sucessful GET request' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: `${error}` });
  }
});
module.exports = router;
