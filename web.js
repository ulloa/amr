require('newrelic');
var express = require('express');
var app = express();
app.use(express.logger());
//app.use("/public", express.static(__dirname + '/public'));

var fs = require('fs');
var htmlfile = "index.html";
app.set('views', __dirname + '/views');
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
app.get('/events', function (req, res)
{
    res.render('events.html');
});
app.get('/staff', function (req, res)
{
    res.render('staff.html');
});
app.get('/support', function (req, res)
{
    res.render('support.html');
});
app.get('/research', function (req, res)
{
    res.render('research.html');
});
app.get('/currentprojects', function (req, res)
{
    res.render('currentprojects.html');
});
app.get('/publications', function (req, res)
{
    res.render('publications.html');
});
app.get('/researchbytopic', function (req, res)
{
    res.render('researchbytopic.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
