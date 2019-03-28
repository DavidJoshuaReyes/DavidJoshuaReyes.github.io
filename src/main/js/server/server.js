const express = require('express');
const path = require('path');
const logger = require('morgan');

const isProduction = process.env.NODE_ENV === 'production';

// instantiate the application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'pages')));

if (!isProduction) {
  app.use(logger('common'));
} else {
  app.use(logger('dev'));
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(3000, function() {
    console.log('Your application is listening on port 3000');
});
