const express = require('express');
const router = express.Router()
const Items = require('../models/items.js')

// INDEX
// ASYNC & AWAIT
router.get('/', async (req, res) => {
    console.log('index')
	let items = await Items.find({});
    console.log('items', items);
	// console.log('fruits', fruits);
	res.send('index working')
});

module.exports = router