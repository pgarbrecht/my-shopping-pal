//Set up Express
const { prototype } = require('events');
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//Environment Variables
require('dotenv').config()
const PORT = process.env.PORT

//Set up Mongoose
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//connect controllers for route logic
const itemController = require('./controllers/itemController.js')
app.use('/items', itemController);

// Default
app.get('/', (req, res) => {
	res.render('homepage.ejs');
});

//Run server
app.listen(PORT, () => {
	console.log(`My Shopping Pal server running on port ${PORT}`);
});
