// import modules
const express = require('express');
require('dotenv').config();

// get port number from .env file with dotenv
const PORT = process.env.PORT;

// intitialize express server
const app = express();

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
