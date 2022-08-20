//Set up Express
const { prototype } = require('events');
const express = require('express');
const app = express();
const Items = require('./models/items.js');

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

// Default
app.get('/', (req, res) => {
	res.send('server working');
});

//Run server
app.listen(PORT, () => {
	console.log(`My Shopping Pal server running on port ${PORT}`);
});
