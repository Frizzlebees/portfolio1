const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mailer = require('./mailer.js');
const http = require('http');

const parser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname, '../client')));

// Front End
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/index.html'));
});

// Email form
app.post('/contact', parser, (req, res) => {
	mailer(req.body.name, req.body.email, req.body.subject, req.body.message);
	res.redirect('/');
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
