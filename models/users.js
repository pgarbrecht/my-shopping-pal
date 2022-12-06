const mongoose = require('mongoose')

//Schema for each user
const userSchema = new mongoose.Schema({
username: {type: String, required: true, unique: true},
password: {type: String, required: true}
})

// Model based on schema
const User = mongoose.model('User', userSchema)

//Export model for use in controllers
module.exports = User