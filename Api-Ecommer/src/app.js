const express = require('express');
const morgan = require('morgan');
const hcRouter = require('./routes/hcRouter');
const userRouter = require('../src/routes/User/userRouter');
const productRouter = require('../src/routes/Product/productRouter');
const orderRouter = require('../src/routes/Order/orderRouter');
const detailOrderRouter = require('../src/routes/Detailorder/detailOrderRouter');
const errorHandler = require('../src/middlewares/errorHandler');

const server = express();

server.name = 'API';

server.use(express.json());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', hcRouter);
server.use('/', userRouter);
server.use('/', productRouter);
server.use('/', orderRouter);
server.use('/', detailOrderRouter);

server.use(errorHandler);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
