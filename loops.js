//*while-loop
//->statement executes as long as a specified condition evaluates to true.
let count = 0;
console.log("Starting Loop ");

while (count < 10) {
  console.log("Current Count : ", count);
  count++;
}
//the while loop stop when the count value greater then 10
console.log("loop stop");

//switch-case
//switch case is perform different actions based on different conditions
let n1 = 10,
  n2 = 20;
let n3,
  operator = "+";

switch (operator) {
  case "+":
    n3 = n1 + n2;
    break;
  case "-":
    n3 = n1 - n2;
    break;
}
console.log("today is ", n3);
