// write a server file for nodejs

// import http package for nodejs
const http = require('http');
const app = require('./backend/app');

// set up express and connect
const port = process.env.PORT || 3000;

app.set('port',port);
const server = http.createServer(app);

server.listen(port);
