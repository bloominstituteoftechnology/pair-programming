var names = ["luke", "Maria", "gabriel", "elizabeth", "andres"]

function capitalize(nameArray) {
  for(let i=0; i<nameArray.length; i++) {
    let firstLetter = nameArray[i].charAt(0).toUpperCase();
    let theRest = nameArray[i].substring(1,);
    nameArray[i] = firstLetter + theRest;
  }
}

console.log("Before capitalizing...");
console.log(names);  

capitalize(names);

console.log("After capitalizing...");
console.log(names);  