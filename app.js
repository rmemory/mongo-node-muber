const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber', { useNewUrlParser: true });

app.use(bodyParser.json());
routes(app);

module.exports = app;
