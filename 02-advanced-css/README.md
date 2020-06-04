# Advanced CSS and Intro JavaScript - pair programming exercises

## _Driver - Navigator_ pair programming
The ***driver*** will... 
* share their screen
* control the keyboard
* talk & think aloud with their navigator (like you would do in an interview or in the workplace)   

The ***navigator*** will...  
* have the README open 
* talk & think aloud with their driver (like you would do in an interview or in the workplace) 
* provide suggestions and instructions to the driver (both WHAT they should do and WHY you think they should do it)  


The ***driver*** and ***navigator*** will switch roles at the designated point in the programming exercise.

## Before you start
![github](img/Octocat.png) Want to work directly with this repository? Make sure to follow Lambda's GitHub workflow and [fork the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

You can also copy & paste the starter code into [codepen](https://codepen.io/).  
 
## The problem 
Complete the function `capitalize()` that takes in an array of names and uses the appropriate JS function to make the first letter uppercase (if it is not already).

The mentee & mentor should switch roles after 10 minutes OR after completing the first problem (before moving onto the STRETCH exercise), whichever comes first.

### Resources
`JS starter code`
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
