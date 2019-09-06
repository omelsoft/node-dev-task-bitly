// app.js
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import Bitly from './src/controllers/bitly.controller';

// Create new express instance
const app = express()

// Set the port where our nodejs app listens
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the views directory
app.set('views', path.join(__dirname, './src/views/'));

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// setup routes/endpoints
app.get('/', (req, res) => {
  res.render('pages/index');
})
app.get('/shorten', urlencodedParser, Bitly.shorten);
app.post('/shorten', urlencodedParser, Bitly.shorten);

app.listen(port)
console.log(`app running on port ${port}`);