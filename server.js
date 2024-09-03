const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(express.static(path.join(__dirname, 'public')));

// Custom error handler middleware to log errors
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
