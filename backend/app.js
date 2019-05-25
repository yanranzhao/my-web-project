// import express package
const express = require('express');

const app = express();

// middleware on app and on the incoming request
// next function: request will continue to execute the followings
app.use( (req, res, next) => {
  console.log('First middleware');
  next();
});

// client send request and waiting for such a response
app.use( (req, res, next) => {
  res.send('Hello from express');
});

// export this app
module.exports = app;
