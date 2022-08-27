const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/users.js')

const router = express.Router()

router.get('/register', (req, res) => {
  res.render('users/register.ejs')
})

router.post('/register', (req, res) => {
    //generate salt to encrypt passwords
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
  
    // check if somebody else already has this username
    User.findOne({username: req.body.username}, (err, userExists) => {
      if(userExists) {
        res.send('that username is taken')
      } else {
        User.create(req.body, (err, createdUser) => {
          req.session.currentUser = createdUser
          res.redirect('/items')
        })
      }
    })
  })
  
  router.get('/signin', (req, res) => {
    res.render('users/signin.ejs')
  })
  
  router.post('/signin', (req, res) => {
    // we need to get the user with that username
    User.findOne({ username: req.body.username }, (err, foundUser) => {
      if (foundUser) {
        const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
        // compareSync returns true if they match
        // and false if they don't match
        // if the passwords match, log then in
        if (validLogin) {
          req.session.currentUser = foundUser
          // we are letting session know
          // that we have logged in
          res.redirect('/items')
        } else {
          // if they don't match, send a message
          res.send('Invalid username or password')
        }
      } else {
        // if they don't exist, we need to send a message
        res.send('Invalid username or password')
      }
    })
  })
  
  // DESTROY session route
  router.get('/signout', (req, res) => {
    // this destroy's the session
    req.session.destroy()
    res.redirect('/')
  })
  
  
  module.exports = router