const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// CORS configuration
const corsOptions = {
  origin: 'https://react-crud-app-azure.vercel.app',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions)); // Use the CORS middleware with options
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
