const express = require('express');
const router = express.Router()
const Items = require('../models/items.js')

// INDEX 
router.get('/', async (req, res) => {
	let items = await Items.find({});
	res.render('index.ejs', { items });
});

// SHOW
router.get('/:id', async (req, res) => {
	const item = await Items.findById(req.params.id);
	res.render('show.ejs', {
		item: item,
	});
});

// CREATE
router.post('/', (req, res) => {
	Items.create(req.body, (error, createdItem) => {
		if (error) {
			console.log('error', error);
			res.send(error);
		} else {
			res.redirect('/items');
		}
	});
});

// DELETE
router.delete('/:id', (req, res) => {
	Items.findByIdAndRemove(req.params.id, (err, data)=> {
		if(err) console.log(err)
		res.redirect('/items')
	})
})

module.exports = router