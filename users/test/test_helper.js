/**
* Dependencies
*/
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

before((done) => {
  // Define mongodb connection and handle possible errors
  mongoose.connect('mongodb://localhost/users_test',{ useNewUrlParser: true })
  mongoose.connection
  .once('open', () => { done() })
  .on('error', (error) => {
    console.warn('Warning: ', error)
  })
})

// Define a hook that will clean our database before each test we run
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done()
  })
})
