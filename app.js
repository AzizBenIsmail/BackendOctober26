var createError = require('http-errors'); // Import the 'http-errors' module for creating HTTP errors
var express = require('express'); // Import the 'express' module to create an Express application
var path = require('path'); // Import the 'path' module for handling file and directory paths
var cookieParser = require('cookie-parser'); // Import the 'cookie-parser' module to parse cookies in incoming requests
var logger = require('morgan'); // Import the 'morgan' module for logging HTTP requests

const http = require('http'); // Import the 'http' module to create an HTTP server 

var indexRouter = require('./routes/index'); // Import the router for the index route
var usersRouter = require('./routes/users.Router'); // Import the router for the users route

require('dotenv').config(); // Load environment variables from .env file
var app = express(); // Create an instance of the Express application

app.use(logger('dev')); // Use the 'morgan' logger middleware in development mode
app.use(express.json()); // Use the built-in middleware to parse incoming JSON requests
app.use(express.urlencoded({ extended: false })); // Use the built-in middleware to parse URL-encoded data with the querystring library
app.use(cookieParser()); // Use the 'cookie-parser' middleware to parse cookies in incoming requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.use('/', indexRouter); // Use the index router for the root route
app.use('/users', usersRouter); // Use the users router for the '/users' route

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = http.createServer(app); // Create an HTTP server using the Express application
server.listen(process.env.port, () => { // Start the server and listen on the port specified in the environment variables
  console.log('Server is running '); // Log a message indicating that the server is running
});