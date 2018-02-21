'use strict';

const express = require('express');
const nodemon = require('nodemon');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Välkommen till Vision Center Sweden' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
