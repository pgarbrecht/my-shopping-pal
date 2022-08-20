const mongoose = require('mongoose')
// Schema for each item
const itemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	notes: { type: String, required: false, default: 'Select edit to add notes or update image for this item' },
	image: { type: String, required: false, default: '/images/placeholder-item.png' },
});

// Model based on schema
const Items = mongoose.model('Items', itemSchema);

//Export model for use in server.js
module.exports = Items;