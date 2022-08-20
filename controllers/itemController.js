const express = require('express');
const router = express.Router()
const Items = require('../models/items.js')

// INDEX
// ASYNC & AWAIT
router.get('/', async (req, res) => {
	let items = await Items.find({});
	res.render('index.ejs', { items });
});

module.exports = router