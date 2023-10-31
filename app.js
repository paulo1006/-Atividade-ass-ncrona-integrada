var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

function soma(a, b) {
  return a + b;
}

app.post('/soma', function(req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/sub', function(req, res) {
  var body = req.body;
  var resultado = body.a - body.b;
  res.send(`O resultado da subtração de ${body.a} por ${body.b} é ${resultado}`);
});

app.post('/multi', function(req, res) {
  var body = req.body;
  var resultado = body.a * body.b;
  res.send(`O resultado da multiplicação de ${body.a} por ${body.b} é ${resultado}`);
});

app.post('/div', function(req, res) {
  var body = req.body;
  var resultado = body.a / body.b;
  res.send(`O resultado da subtração de ${body.a} por ${body.b} é ${resultado}`);
});
