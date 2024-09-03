const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Serve static files from the "public" directory
server.use(express.static(path.join(__dirname, 'public')));

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Rewriter to support custom routes
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

// Use router
server.use(router);

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
