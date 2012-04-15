var express = require('express');
var instagram = require('./instagram').createClient('a8d764b1a7fe4089959910ee6bdcedce',	'253a2b9abade4f25adb3825249d98b85');


var app = express.createServer(express.logger());

app.configure(function(){
  app.set('view options', { layout: false });
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(request, response) {
  instagram.media.popular(function (images, error) {
    response.render('index', {title:'Hello World!', 
    url: request.headers.host, images:images});
    });
});

app.get('/tag/:tag', function(request, response) {
  instagram.tags.media(request.params.tag,function (images, error) {
    response.render('index', {title:'Hello World!', 
    url: request.headers.host, images:images});
    });
});

app.post('/', function(request, response) {
  response.redirect('/tag/'+request.body.tag);
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});