
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var mongoose = require('mongoose');
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  mongoose.connect('mongodb://127.0.0.1/mydb');
});

app.configure('production', function(){
  app.use(express.errorHandler());
  mongoose.connect('mongodb://172.21.1.144/blog');
});
app.get('/admin', routes.admin);
app.get('/', routes.tampil);
app.get('/add', routes.adddata);
app.post('/input', routes.input);  
app.get('/detail/:id', routes.detail);                                                                                                                                                                                                                                                                                                                                                                        
app.listen(3000, function(){


  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});