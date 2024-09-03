const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors and no-cache)
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
