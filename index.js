'use strict';
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static(__dirname + '/public'));

// const pg = require('pg');
// const Pool = pg.Pool;

// // use a SSL connection
// let useSSL = false;
// const local = process.env.LOCAL || false;
// if (process.env.DATABASE_URL && !local) {
//   useSSL = {rejectUnauthorized: false};
// }

// // database connection to use
// const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:moddy123@localhost:5432/audio';

// const pool = new Pool({
//   connectionString,
//   ssl: useSSL,

// });

// const GameApp = require('./database');
// const gameApp = GameApp(pool);


// add more middleware to allow for templating support

// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');

// // Dynamically add player names into database
// app.get('/name/:name/score/:score/level/:level', async function (req, res) {

//     var names = req.params.name;
//     var scores = req.params.score;
//     var levels = req.params.level;

//     await pool.query('INSERT INTO players (name,score,level) VALUES ($1, $2, $3)',[names, scores, levels])

//     res.json({Success: 'Success'});

// });

// app.get('/name/:name', async function (req, res) {

//     var names = req.params.name;

//     await pool.query('INSERT INTO players (name) VALUES ($1)',[names])

//     res.json({Success: 'Success'});

// });

// // home route...get everything from the players table
// app.get('/', async function (req, res) {

// 	var data = (await pool.query('select (name,score,level) from players')).rows;

//     res.json(data)
// })

// app.get('/player/level', async function (req, res) {

// 	var data = (await pool.query('select level from players')).rows;

//     res.json(data)
// })

// app.get('/exercise/', async function (req, res) {

// 	var data = (await pool.query('select * from exercise')).rows;

//     res.json(data)
// })

// app.get('/exercise/word', async function (req, res) {

// 	var data = (await pool.query('select word from exercise')).rows;

//     res.json(data)
// })


  
// start  the server and start listening for HTTP request on the PORT number specified...

const PORT =  process.env.PORT || 3013;

app.listen(PORT, function() {
	console.log(`Audio App started on port ${PORT}`)
});
