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
