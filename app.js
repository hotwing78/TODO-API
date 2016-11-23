'use strict';
let express = require('express');
let app = express();
let mongoose = require('mongoose');

//Because app.js is sitting on the root folder it will grab index.js from the config folder.
let config = require('./config');

//Let the app know about the endpoints for the api
let setupController = require('./controllers/setupController');
let apiController = require('./controllers/apiController');

//Declaring the port default is 3000.
let port = process.env.PORT || 3000;

//Points to the folder and js that is run inside of the browser 'Client side of application'.
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Connect to the database using the export from the ./config/index.js module
mongoose.connect(config.getDbConnectionString());

//Pass the app to the setupController because it returns a function
setupController(app);
apiController(app);

//Tell the app to listen on the set  port
app.listen(port);
