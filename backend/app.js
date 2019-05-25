// import express package
const express = require('express');
const bodyParser = require("body-parser");

const Post = require('./models/posts');

const app = express();

// all incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));


// add a middleware -- header
app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // default and other types header
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post( "/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json( {message: 'Post added successfully'}); // add new resource and return 201
});

// client send request and waiting for such a response
app.get( "/api/posts", (req, res, next) => {
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
