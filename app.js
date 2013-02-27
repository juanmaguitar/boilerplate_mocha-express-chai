var express = require('express'),
    index = require('./app/controllers/index'),
    app = express();
 
// Config
app.configure(function() {
  app.set('port', 8000);
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'jade');
});

app.configure('development', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('test', function () {});
app.configure('production', function() {});

// Set routes
index.init(app);

module.exports = app;
 
if (!module.parent) {
  app.listen(app.get('port'), function(){
    console.log('Server started on port ' + app.get('port'));
  })
}
