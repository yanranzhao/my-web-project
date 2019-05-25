// import express package
const express = require('express');

const app = express();

// add a middleware -- header
app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // default and other types header
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

// client send request and waiting for such a response
app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'fadf124211', title: 'First server-side post', content: 'This is from server'},
    { id: 'sdfasd124211', title: 'Second server-side post', content: 'This is from server'}
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  }); // return json file
});

// export this app
module.exports = app;
