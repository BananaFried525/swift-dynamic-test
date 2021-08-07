const express = require('express');
const logger = require('morgan');
const database = require('./bin/db');

const indexRouter = require('./routes/index');

const app = express();
database();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
