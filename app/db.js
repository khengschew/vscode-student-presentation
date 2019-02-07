/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

mongoose.connect('mongodb://test:testtest12@ds145563.mlab.com:45563/github-app');

const { Schema } = mongoose;
const BlogPost = new Schema({
  author: String,
  title: String,
  body: String,
});

const Blog = mongoose.model('Blog', BlogPost);

const funcs = {
  saveBlog: (blogData) => {
    debugger
    return new Blog(blogData).save();
  },
  getBlogs: () => {
    return Blog.find();
  },
};

module.exports = funcs;
