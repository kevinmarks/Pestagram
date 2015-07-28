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
    response.render('index', {title:'Pestagram: recent', 
      url: request.headers.host, images:images});
    });
});

app.get('/tag/:tag', function(request, response) {
  instagram.tags.media(request.params.tag,function (images, error) {
    if(!error) {
        response.render('index', {title:'Pestagram: tag ' + request.params.tag, 
          url: request.headers.host, images:images});
    } else {
        response.redirect('back');
    }
    });
});

app.get('/user/:uid', function(request, response) {
  instagram.users.media(request.params.uid,function (images, error) {
    if(!error) {
        var titleslug='Pestagram: user '; 
        if (images && images[0] && images[0].user) {
            titleslug = titleslug + images[0].user.username;
        }
        response.render('index', {title:titleslug, 
          url: request.headers.host, images:images});
    } else {
        response.redirect('back');
    }
    });
});

app.get('/loc/:id', function(request, response) {
  instagram.locations.media(request.params.id,function (images, error) {
    if(!error) {
        var titleslug='Pestagram: location '; 
        if (images && images[0] && images[0].location) {
            titleslug = titleslug + images[0].location.name;
        }
        response.render('index', {title:titleslug, 
          url: request.headers.host, images:images});
    } else {
        response.redirect('back');
    }
    });
});


app.post('/', function(request, response) {
  response.redirect('/tag/'+request.body.tag);
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});