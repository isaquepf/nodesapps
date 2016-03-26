
var express = require('express');
var home = require('../app/route/home');

module.exports = function() {
      
  var app = express();
  
  app.set('port', 3000);  
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  
  return app;
};