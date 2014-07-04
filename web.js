require('newrelic');
var express = require('express');
var app = express();
app.use(express.logger());
//app.use("/public", express.static(__dirname + '/public'));

var fs = require('fs');
var htmlfile = "index.html";
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
//  response.send(fs.readFileSync('index.html').tostring());
});


app.use(express.static(__dirname + '/public')); // just added for static files
app.get('/about', function (req, res)
{
    res.render('about.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
