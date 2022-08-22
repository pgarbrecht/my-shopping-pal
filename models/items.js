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
	notes: { type: String, required: false, default: 'Select edit to add notes for this item' },
});

// Model based on schema
const Items = mongoose.model('Items', itemSchema);

//Export model for use in server.js
module.exports = Items;