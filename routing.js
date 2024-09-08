const express = require('express');
const app = express();

//Basic Level Routing

app.get('/', function (req, res) {
  res.send('Hello World From Dev')
});

app.get('/profile', function (req, res) {
  res.send('Signed In')
})


app.listen(3000)