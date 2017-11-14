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


## What I am pleased with

- The app works. 
- Different tasks are seperated into different constructor functions to follow the single responsibility principal. 
- The app is tested.

## What I would do with more time

- I would work on the formatting of the table. Either by creating a front-end or through npm cli-table. I tried it in several ways, but couldn't quite get it right.

- I would work on the FindPrimes() constructer to upspeed the process of finding prime numbers. It works fine with smaller numbers but it can take a few seconds with bigger numbers.



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