const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mailer = require('./mailer.js');

const parser = bodyParser.urlencoded({extended: true});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/contact', parser, (req, res) => {
  mailer(req.body.name, req.body.email, req.body.subject, req.body.message);
  res.redirect('/');
});

app.listen(3000, () => console.log('Listening on port 3000...', __dirname));