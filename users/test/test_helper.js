/**
* Dependencies
*/
const mongoose = require('mongoose')

// Define mongodb connection and handle possible errors
mongoose.connect('mongodb://localhost/users_test',{ useNewUrlParser: true })
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning: ', error)
  })
