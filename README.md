# Prime-test

This app displays your favorite prime numbers in a multiplication table.


![Alt Text](https://github.com/Samellenrider/Prime-test/blob/master/demo.gif)

## How to run it 

**1. Download node.js here: https://nodejs.org/en/download/**

Now, open your terminal and enter the following commands:

**2. Clone the repository**
```
$ https://github.com/Samellenrider/Prime-test.git
``` 
**3. Move into the directory**
```
 $ cd Prime-test
```
**4. Install dependencies**
```
 $ npm install
```
**5. Run the app**
```
 $ node index.js
```

## How to test

**Install Jasmine**

```
 $ npm install -g jasmine
```

**Run the following command**

```
 $ jasmine
```

## Approach

My first step was to find out more about prime numbers, tables and how such an app could work. 

I broke down the task into simpler steps and eventually came up with the structure. I took my time with the individual functions and tried to implement them in the best possible way. 

Function by function I assembled the app and tested it along the way with the help of the Jasmine testing framework and the Javascript console in the browser.

The number the user gives the program gets checked in the CeckInput function. It returns true if the number is a positive integer and false if it's a string, a negative integer, 0 or NaN.

The next step is the FindPrimes function. In the prime function we pass in the usernumber and then loop from 2 until the usernumber -1. The usernumber will be checked last. If the remaining value of the check is 0 we know the number is not a prime.
This function gets called in the collectPrimes function which repeatedly calls the prime function and pushes confirmed prime numbers into the constructor functions array until the arrays length is equal to the users number. It then returns the array.

The returned array gets passed into the createMultiples function. Here, the array gets merged with the firstRow array, which already holds a number, 1. That will later be replaced by an empty string. The firstRow array gets pushed into the constructor functions table array.
After that the function takes the length of the firstRow array and creates a new array called secondRow array with the multiples of the prime numbers which it takes from the firstRow array. This secondRow array gets pushed into the table aswell.
The createMUltiples fuction returns the table array after replacing the first position of the first array with an empty string.

This multidimensional table array gets passed into the tableFormatter function where it takes each array in the multidimensional table array, loops over it and adds a vertical line behind every number.
It pushes the single array back into the table, formats the table and returns it.

## What I am pleased with

- The app works. 
- Different tasks are seperated into different constructor functions to follow the single responsibility principal. 
- The app is tested.

## What I would do with more time

- I would work on the formatting of the table. Either by creating a front-end or through npm cli-table. I tried it in several ways, but couldn't quite get it right.

- I would work on the FindPrimes() constructer to upspeed the process of finding prime numbers. It works fine with smaller numbers but it can take a few seconds with bigger numbers.

- The index file is quite big and with more time on the had I probably would have found a way to subtract the methods.

## Resources

- https://nodejs.org/api/readline.html
- https://docs.npmjs.com/cli/init
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=a
- http://www.javascriptkit.com/javatutors/twoarray1.shtml
- https://jasmine.github.io/2.0/introduction.html
- https://www.youtube.com/watch?v=Cta5s1QBD8E
- https://developer.mozilla.org/en-US/docs/Web/API/Console/table
- https://stackoverflow.com/questions/9510148/using-jasmine-to-spy-on-a-function-without-an-object
- https://www.npmjs.com/package/cli-table2