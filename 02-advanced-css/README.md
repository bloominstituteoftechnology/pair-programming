# sprint - module pair programming exercises

## _Driver - Navigator_ Pair Programming
The driver will...  
The navigator will...  
Mentor and mentee will switch roles a the designated point in the programming exercise.

## Before you start
![github](img/octocat.png) Want to work directly with this repository? Make sure to follow Lambda's GitHub workflow and [fork the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

You can also copy & paste the starter code into [codepen](https://codepen.io/).  
## The problem 
Complete the function `capitalize()` that takes in an array of names and uses the appropriate JS function to make the first letter uppercase (if it is not already)

### `JS starter code`
```javascript
var names = ["luke", "Maria", "gabriel", "elizabeth", "tim"]

function capitalize(nameArray) {
  // To be completed
}

console.log("Before capitalizing...");
console.log(names);  

capitalize(names);

console.log("After capitalizing...");
console.log(names);  
```
1. Traverse the array
2. Modify each name to be properly capitalized (_hint...look at what string functions are available in JS_)
> We don't need to return anything from this function for it to work. Why is that?

### STRETCH 
Write a different function, `filter_names()`, that takes in an array of names and only prints out those starting with a particular letter.
