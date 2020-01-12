// require express
const express = require('express');
// string --> object req.body
const bodyParser = require('body-parser');
//
const morgan = require('morgan');
//
const cors = require('cors');
//
const path = require('path');
// import the router
const router = require('./router');

// create server
const app = express();
const port = 3000;

// use middleware
app.use(bodyParser.json());
// extended: true --> values can be any data type
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev')); // generates logs when requests made
app.use(cors()); // browser security

// use router
app.use('/api', router);

// you can test this with Postman!!!
app.get('/name', (req, res) => res.send('Pam!!!!'));

// express docs > getting started
// __dirname is the relative path to this file
// static files never change - serve to the client
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// assign a port and begin listening
app.listen(port, () => console.log(`server listening on port ${port}`));



