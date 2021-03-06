const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('../routes/routes');

const app = express();

const port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://god:blessrng@ds135399.mlab.com:35399/workers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});

app.use('/api', routes);

app.listen(port, function () {
  console.log(`api running on port ${port}`);
});
