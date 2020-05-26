const e = require("express");

//*indexOf
//->It will return the index value
//->string.indexOf(searchvalue, start)
//->start- from which position u wann start search
let str = "Hello indexing";
let n = str.indexOf("n");
let x = str.indexOf("ing");

console.log("n is at position", n);
console.log("x is at position", x);

//*findIndex
//->The findIndex() method returns the index of
// the first element in the array that satisfies
// the provided testing function.
const arr = [5, 4, 23, 2, 1];

const isLargeNumber = (element) => {
  if (element > 13) {
    console.log("element is", element);
    return element;
  }
};

console.log(arr.findIndex(isLargeNumber));

//*findIndexOf



