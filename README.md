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


### More on Models


### The Basics of Mocha


### Running Mocha test


### Creating Model Instances


### Saving Users to Mongo


### Dropping Collections


### Mocha's Done Callback


### Mongoose's isNew Property


### Default Promise Implementation


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
