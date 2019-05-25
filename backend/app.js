// import express package
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/posts');

const app = express();

mongoose.connect("mongodb+srv://admin:0rIU4mOIuKLZpWvF@cluster0-53pve.mongodb.net/node-angular?retryWrites=true")
  .then( () => {
  console.log('Connected to database');
  }).catch( () => {
  console.log('Connection failed');
  });

// all incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));


// add a middleware -- header
app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // default and other types header
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post( "/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // save data to DB
  post.save();
  res.status(201).json( {message: 'Post added successfully'}); // add new resource and return 201
});

// client send request and waiting for such a response
app.get( "/api/posts", (req, res, next) => {
  // fetch data from post collection. find() return all entries
  Post.find().then( documents => {
    res.status(200).json({
      message: 'Posts fetched successfully!',
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(req.params.id);
    res.status(200).json({ message: "Post deleted"});
  });
});


// export this app
module.exports = app;
