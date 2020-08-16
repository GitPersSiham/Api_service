// Require JSON-SERVER
const jsonServer = require('json-server');

// Returns an express server
const server = jsonServer.create();

// Specify file to store routes and documents
const router = jsonServer.router('db.json');

// Tell the generated express server to use json-server's middlewares
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Tell express to use the routes from db.json
server.use(router);

// Retrieve port
/*const port = require('./src/constants/api').port;*/
const PORT = parseInt(process.env.PORT) || 3000;

// Listen to port
server.listen(PORT, () => {
  console.log('JSON Server is running')
})