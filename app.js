const express = require('express');
const app = express();

const hbs = require( 'express-handlebars');
const path = require('path');
const fs = require('fs'); 
const url = require('url');
const querystring = require('querystring');
const http = require('http');

const PORT = 8080;

app.use("/static", express.static(__dirname+'/static'));

app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
}));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


app.get('/favicon.ico', (req, res) => {
    console.log('Need to figure out what this is...');
});

app.get(/^(?!\/api\/)/, (req, res) => {
    let purl = url.parse(req.url, true);
    let pathname = 'pages' + purl.pathname;
    
    if ((pathname)[pathname.length - 1] === '/') {
        pathname += 'index';
    }

    res.render(pathname, purl.query);
});
