var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/assets'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

module.exports = {
  isCurrentPage: function(req, controller, action) {
    return (req.options.controller === controller && req.options.action === action)
  }
}

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/weather', function (request, response) {
  response.render('pages/weather');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
