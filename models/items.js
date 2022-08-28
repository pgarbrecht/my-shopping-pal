const mongoose = require('mongoose');
const db = mongoose.connection;

//Connection for Mongodb Atlas
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log(`MongoDB connected at ${db.host}:${db.port}`)
	})
	.catch((err) => console.log(err))

// Schema for each item
const itemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: false, default:'http://drive.google.com/uc?export=view&id=1TgUGOIpQF4dfJKONzWuPiZPN5NEjSYwy' },
	notes: { type: String, required: false, default:'Select the pencil icon to add new image or notes for this item' },
	username: { type: String},
});

// Model based on schema
const Items = mongoose.model('Items', itemSchema);

//Export model for use in server.js
module.exports = Items;