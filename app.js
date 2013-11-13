var express = require('express');
var app = express();

app.enable('trust proxy');

app.use(express.cookieParser());
app.use(express.session({secret: '57bef106-4605-429e-83c6-11f456f40f39'}));

app.use(express.compress());
app.use(express.static('public'));
app.use(express.logger());
app.use(express.bodyParser());

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.listen(3030);
console.log('Listening on port 3030');
