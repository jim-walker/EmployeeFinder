// Require node modules
const express = require('express');
const path = require('path');
// Create reference point for express http server
const app = express();
// Add middleware data interpreters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add route handler files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
// Create Listener on port 8080
const PORT = 8080;
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});