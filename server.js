/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const helper = require('./app/helper');
const db = require('./app/db');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.post('/api/check', (req, res) => {
  const results = helper(req.body);
  res.send(results);
});

// blog routes
app.get('/api/blogs', (req, res) => {
  db.getBlogs();
});

app.listen(3000);
