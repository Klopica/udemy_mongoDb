# MongoDB - The Complete Developers Guide

## Installation (Windows)
### MongoDB
Download mongo from [https://www.mongodb.com/]
Download page contains different installation versions of mongodb and all the different associated tools.

Installation instructions can be found on following link: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/?_ga=2.30683382.879108451.1542832683-243070810.1541507469]

After installation run mongo server in command prompt or in commander:
```
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
```

It is important to pay attention to version that is written in code above.

### Robo Mongo
Robo is a fancy GUI for looking at everything that's sitting inside our database.
Download Robo 3T from [https://robomongo.org/]

There are two installation versions on this site. One is full installation on local machine and one is a portable version which does not require an installation. It downloads installation folder itself and we can run it from this folder.

## ES6 Refresher
### Promises
It is important to have a solid grasp on promises when working with mongo. Promises represent the No.1 way in which we will interact with mongo database.

Create folders and files for promises playground.
```
mkdir promises
touch promises/index.html
```

In this file we will create a simple game in which user needs to click a button at minimum of 6 times to win. First version includes simple counter increment and a timeout function.
If counter has value of 6 when timeout clock runs out, user wins.

Promise is a tool that we have for managing asynchronous code throughout our application. Promise is a tool for handling any code that is going to execute at some point in the future.
When we create a promise by using ```new Promise```, we pass in a function. Function is called with ```resolve``` and ```reject``` functions. These two functions allow us to manipulate the state that a promise is in.

Promises have 3 different possible states:

  * unresolved - Waiting for something to finish.
  * resolved - Something finished and it all went ok.
  * rejected - Something finished and something went bad.

Inside the promise code/logic, if we call resolve, Promise will enter resolved state.
If we call reject, Promise will enter rejected state.

If we make this game a function with ```Promise```, when we call the function, we can use ```.then()``` and ```.catch()``` blocks as chained events after function call.

In our small game, when we call ```startGame()``` function, it returns the Promise that was created.
When we resolve the promise, any function passed to ```.then()``` will be called.
When we reject the promise, any function passed to ```.catch()``` will be called.

## Core Fundamentals of MongoDB
### Where do we use Mongo?
Mongo stores data that needs to be persisted in any application.

### What is Mongoose?
Mongoose is ORM or ODM (Object Relational Mapper or Object Data Mapping). Mongoose allows us to work with mongodb in much easier fashion than if we were using core mongo APIs.

### Fundamentals of MongoDB
Mongo bases all of its data storage around two different ideas.
1. Mongo allows us to have multiple internal databases inside a single Mongo instance.
2. Collections

### Last touch of setup
Core Mongoose/Mongo:

Create, Read, Update, Destroy.


## A Test Driven Experience
### Project overview
In the last section we created 'users' folder and it will contain out first test project.

First we need to generate package.json inside created directory.
```
cd users
npm init
```

Install project dependencies.
```
npm install --save mocha nodemon mongoose
```

The goal of this test project is mastering of the very common four fundamental mongo database operations: create, read, update and destroy data. For these purposes we will create a simple application with no frontend or UI components.
We will create Mongo database with collection of users. User will be a simple object with some basic information.
Then we are going to wire up this collection of users to the Mongoose library.
Finally we are going to use Mocha testing framework to test our setup and make sure we are actually storing information to database.

Project structure:
Create folder ```/src``` and file user.js inside it.
user.js file will contain code that connects MongoDB and Mongoose together.
```
mkdir src
touch src/user.js
```

Create folder ```/test``` and files that will contain test for CRUD operations.
```
mkdir test
touch test/create_test.js
touch test/read_test.js
touch test/update_test.js
touch test/destroy_test.js
```

### The Test Helper file
The Mocha test framework is by far most popular framework for any type of javascript testing around the NodeJS environment.
Create test_helper file in /test folder.
```
touch test/test_helper.js
```
This file will contain any code we might need to set up our testing environment. Initial setup will take care of mongo connection and after successful connection, it will signal Mocha that it is ok to continue with testing. If connection fails, it will throw an error.

### Mongoose Connection Helper
File 'test_helper.js' contains code that takes care of mongo connection. If connection is successful, it allows mocha to continue with testing, but if connection fails, it returns an error.
After writing code from this lesson, we can try to run it with command:
```
cd users
node test/test_helper.js
```
If everything went OK, message "Good to go!" should be visible in our console.

### Mongoose Models
In this part we will use mongoose to create a new collection of data. We are going to create a collection of users.
To create this users collection, we need to understand a little bit how mongoose really works.
We use mongoose to create Models that represent a record that is a very specific collection. Model represents all of the records that sit inside a collection.
Model will also be used to create objects that represent single instances or single records within our collection as well.

All models also have a very important property: Schema.
Schema tells us exactly what properties to expect for each record in collection to have and what type of data we expect it to be.

For our test project we will create a User model in 'users/src/user.js' file.

### More on Models
Add Schema and Model to 'users/src/user.js'
```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String
})

const User = mongoose.model('user', UserSchema)

module.exports = User

```
After defining model, mongoose creates defined model as a new collection inside our defined database.
Mongoose creates this collection with all properties that are defined in Schema.
This model does not represent a single user, it represents an entire collection of data.
We need to make sure that any other file in this project has an access to user model we just created. We can do so with ```module.exports``` command.

### The Basics of Mocha
Now it is time to test our User model and make sure it actually can insert data into our database. To write this test we need to learn a little bit more about how Mocha works.
Test that will help us in making sure that we can create a new user and save it to database. Code for this will be written in '/users/test/create_test.js'.

This test file will make use of Mocha functions 'describe' and 'it'. These functions are available to us by default because we installed Mocha dependency earlier.

The purpose of string parameter we pass to 'describe' function is just to modify the testing feedback that we get from Mocha.
Inside of a function that we pass as second argument of 'describe' function will be placed a variety of 'it' blocks. 'it' is a function just as 'describe' is.

The 'it' function takes in the same arguments as 'describe'.
The 'it' block is an absolute key to all testing inside Mocha. Whenever Mocha sees an 'it' function, it knows a developer is trying to run some kind of test inside that function. Mocha will queue up all 'it' blocks and will run them all, one at a time.
Inside every 'it' block we need to make an assertion.

### Running Mocha test
How to make an assertion inside our test file?
Inside an 'it' block we need to make an actual assertion, something that is going to compare one information to the other. Mocha gives us global access to 'describe' and 'it' functions, but it does not give us global access to anything we need to make an assertion.

For assertions we will use node module 'assert'.
To run our test, in the command line run ```npm run test``` but first we need to define our test scripts inside 'package.json'. To be able to run this test, we need to position in folder that contains this 'package.json' file.

Below is a sample code with a simple assertion that we expect to be true. This means that when we run this test, it will pass successfully.
```
const assert = require('assert')

describe('Creating records', () => {
  it('saves a user', () => {
    assert(1 + 1 === 2)
  })
})

```
### Creating Model Instances and Saving Users to Mongo
In this section we will write a test around creating a user and saving it to the database.

We need to make sure that we can use User model that we created earlier so we can save something to database.

```
describe('Creating records', () => {
  it('saves a user', () => {
    const joe = new User({ name: 'Joe' })
    joe.save()

  })
})
```
When we run this code, it will always add a new user with name Joe. This, of course is not a good thing and in next section we will try to figure out how to deal with this kind of issues.

### Dropping Collections
To make sure that every single test runs in isolation, after each test we will empty our database.

For this purpose we will add a hook in our 'test_helper.js' file. A hook is a function that will be executed before any test gets executed in our test suite.

### Mocha's Done Callback
The problem with our last hook is that, making any type of operation on our database is asynchronous and it takes some amount of time to complete. Mocha on the other hand does not have any default idea of asynchronous operations.
Inside our ```beforeEach``` we are starting our long running process. After this process is complete, we will call 'done' callback provided automatically by Mocha.

Inside ```drop()``` function we will make a callback function that will be executed once it is done dropping our collection of users.

So now every time we run create test, hook will first drop all user collections and then create a new user.

### Mongoose's isNew Property
In this section we talk about actual assertion inside our 'it' block of 'create_test.js' to make sure that user is actually being saved to database.

Inside our 'it' block we are calling a ```save()``` function. We want to make an assertion after this function finishes and then continue to next test. ```save()``` call will return a Promise. When a promise resolves that means that user has been successfully saved to database. To get callback we need to add ```.then()``` statement. To figure out whether or not user has been saved to database, we're going to rely on mongoose's property ```isNew```. Before user has been saved, this flag will be set to 'true'.

Once user has been saved to mongo and exists in database, flag ```isNew``` will be set to false.

After assertion we will call ```done()``` callback. ```done``` is available to every 'it' block in mocha. We can use it any time. When we reference it in any function, we have to make sure we actually call it somewhere within our 'it' block.
When we call our test with false assertion we get an deprecation error. This will be fixed in the next section.

### Default Promise Implementation
We will set ```mongoose.Promise = global.Promise```. This was we tell mongoose to use ES6 Promise library.

### Test Setup for Finding Users


### Making Mongo Queries


### The ID Property - A Big Gotcha


### Automating test with Nodemon


### Finding Particular Records


### The Many Ways to Remove Records


### Class Based Removes


### More Class Based Removals


### The Many Ways to Update


### Set and Save for Updating Records


### Model Instance Updates


### Class Based Updates


## Mongo Operators
### Update operators


### The Increment Update Operator


### Validation of Records


### Requiring Attributes on a Model


### Validation With A Validator Function


### Handling Failed Inserts


## Handling Relational Data
### Embedding Resources in Models


### Nesting Posts on Users


### Testing Subdocuments


### Adding Subdocuments to Existing Records


### Removing Subdocuments


### Virtual Types


### Definig a Virtual Type


### ES6 Getters


### Fixing Update Tests


## Thinking About Schema Design
### Challenges of Nested Resources


### Embedded Documents vs Separate Collections


### BlogPosts vs Posts


### Creating Associations with Refs


### Test Setup for Associations


### Wiring Up Has Many and Has One Relations


### Promise.All for Parallel Operations


### Populating Queries


### Loading Deeply Nested Associations


## Mongoose Middleware
### Cleaning Up with Middleware


### Dealing with Cyclic Requires


### Pre-Remove Middleware


### Testing Pre-Remove Middleware


## Handling Big Collections with Pagination
### Skip and Limit


### Writing Skip and Limit Queries


### Sorting Collections


## Putting Skills to the Test
### Project Setup


### Project overview


### First Step - Artist and Album Models


### The Album Schema


### The Artist Model


### Finding Particular Records


### FindOne vs FindById


### The CreateArtist Operation


### Solution to Creating Artist


### Deleting Singular Records


### Solution to Removing


### Editing Records


### How to edit Single Artist


## Hard Mode Engage
### Minimum and Maximum Values in a Collection


### Solution to Min and Max Queries


### Challenge Mode - Search Query


### Sorting, Limiting, and Skipping Together


### Danger! Big Challenge ahead


### Filtering By Single Properties


### Filtering with Multiple Props


### Handling Text Search


### Indexes and Text Search


### Batch Updates


### The Hidden 'Multi' Setting


### Seeding Many Records


### Counting The Result Set


## MongoDB with Node and Express
### App Overview


### Designing API routes


### Project Setup


### HTTP request Methods


### The Basics Of Express


### Express Boilerplate


### Handling Requests with Express


### Testing Express Apps with mocha


### Running Mocha


### Project Structure


### Refactoring For Controllers and Models


### The Driver Model


### The Create Drivers Route


### The Body Parser Middleware


### Testing Driver Creation


### More on Testing Driver Creation


### Additional Mongoose Setup


### Driver Implementation


### Testing Endpoints with Postman


### Dev vs Test environments


### Separate Test Databases


### Middleware in Express


### Handling Editing of Drivers


### Testing Driver Updates


### Handling Deletion of Drivers


### Testing Driver Deletion


### Geography with MongoDB


### The GeoJSON Schema


### GeoNear Queries


### Testing a GeoNear Query


### One Big Gotcha


### Another Big Gotcha


### Testing GeoQueries


### RallyCoding
