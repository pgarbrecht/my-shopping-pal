//Set up Express (our web framework for handling HTTP requests and responses) and npm code packages that work with it
const { prototype } = require('events');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');

//Bring in environment variables (found in the .env file)
require('dotenv').config()
const PORT = process.env.PORT

//Sessions
//create a session secret variable with value that is stored in .env file
const SESSION_SECRET = process.env.SESSION_SECRET
//set up the session with our secret
app.use(
    session({
      secret: SESSION_SECRET,
      resave: false, 
      saveUninitialized: false 
    })
  )

// custom middleware to make currentUser available as a local variable on all routes
app.use((req, res, next) => {
	res.locals.currentUser = req.session.currentUser
	next()
})

//Set up MongoDB (our database) and Mongoose (intermediary between Mongo database and Node.js server)
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI //use MongoDB Atlas (cloud database) found in .env file
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

// Middleware - sits between browser and application
app.use(express.static('public')); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Connect controllers for route logic
const itemController = require('./controllers/itemController.js')
app.use('/items', itemController);

const userController = require('./controllers/userController.js')
app.use('/users', userController)

// Default
app.get('/', (req, res) => {
	res.render('homepage.ejs');
});

//Run server with console log to show it's working
app.listen(PORT, () => {
	console.log(`My Shopping Pal server running on port ${PORT}`);
});
