//This controller manages the main routes to use the app when logged in

//Set up our variables needed
const express = require('express');
//both Items and User are needed in this controller since both used for index route
const Items = require('../models/items.js');
const User = require('../models/users.js');
const router = express.Router();

// custom middleware to require authentication on routes
const authRequired = (req, res, next) => {
	if(req.session.currentUser){
		next()
	} else {
		res.render('users/notsignedin.ejs')
	}
}

// INDEX ROUTE
router.get('/', authRequired, async (req, res) => {
	let items = await Items.find({});
    let user = await User.findById(req.session.currentUser._id);
	res.render('index.ejs', { items, user });
});

// SHOW ROUTE
router.get('/:id', authRequired, async (req, res) => {
	const item = await Items.findById(req.params.id);
	res.render('show.ejs', {
		item: item,
	});
});
 
// CREATE ROUTE
router.post('/', authRequired, (req, res) => {
	Items.create(req.body, (error, createdItem) => {
		if (error) {
			console.log('error', error);
			res.send(error);
		} else {
			res.redirect('/items');
		}
	});
});

// DELETE ROUTE
router.delete('/:id', authRequired, (req, res) => {
	Items.findByIdAndRemove(req.params.id, (err, data)=> {
		if(err) console.log(err)
		res.redirect('/items')
	})
})

// EDIT ROUTE
router.get('/:id/edit', authRequired, (req, res) => {
	Items.findById(req.params.id, (err, foundItem) => {
		res.render('edit.ejs', {item: foundItem})
	})
})

// UPDATE ROUTE
router.put('/:id', authRequired, (req, res) => {
	Items.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
		res.redirect('/items')
	})
})

module.exports = router