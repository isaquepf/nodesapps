var express = require('express'),
    path = require('path')
load = require('express-load');

var app = express();
app.directory = __dirname;



require('./config/environments')(app);
require('./routes')(app);

load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

module.exports = app;
