/**
* Dependencies
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define User Schema
const UserSchema = new Schema({
  name: String
})

// Define User Model
const User = mongoose.model('user', UserSchema)

// Export the User model
module.exports = User
