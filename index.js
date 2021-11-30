'use strict';
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static(__dirname + '/public'));

const pg = require('pg');
const Pool = pg.Pool;

// use a SSL connection
let useSSL = false;
const local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = {rejectUnauthorized: false};
}

// database connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:moddy123@localhost:5432/audio';

const pool = new Pool({
  connectionString,
  ssl: useSSL,

});

// add more middleware to allow for templating support

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Dynamically add player names into database
app.get('/name/:name/', async function (req, res) {

    var names = req.params.name;

    await pool.query('INSERT INTO players (name) VALUES ($1)',[names])

    res.send({Success: 'Success'});

});

// home route...get everything from the players table
app.get('/', async function (req, res) {

	var data = (await pool.query('select * from players')).rows;

    res.send(data)
})
  
// start  the server and start listening for HTTP request on the PORT number specified...

const PORT =  process.env.PORT || 3011;

app.listen(PORT, function() {
	console.log(`Audio App started on port ${PORT}`)
});
