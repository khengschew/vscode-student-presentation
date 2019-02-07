/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const helper = require('./app/helper');
const db = require('./app/db');

const app = express();

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.post('/api/check', (req, res) => {
  const results = helper(req.body);
  res.send(results);
});

// blog routes
app.get('/api/blogs', (req, res) => {
  db.getBlogs().then((data) => {
    res.send(data);
  });
});

app.post('/api/blogs', (req, res) => {
  const { author, title, body } = req.body;
  db.saveBlog({
    author,
    title,
    body,
  })
    .then((data) => {
      res.send(data);
    });
});

app.listen(3000);
console.log('Running at http://localhost:3000');
