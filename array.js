//*map
//->ALways return new array
const arr = [1, 4, 9, 16];

const map = arr.map((x) => x * 2);

console.log("map", map);
console.log("arr", arr);

//*Reduce
//->two value in argument.
//->first is accumulator that is the previous value
//->diffault value is 0 but u can change by at the end of the bracket define value
//->second is current value from the array.
const data = [1, 4, 9, 16];

const res = data.reduce((accumalator, currentValue) => {
  return accumalator + currentValue; //answer should be 30
}, 5); //by defining this value 5, you can change the value of accumulator
console.log("result of reduct is", res);

//*filter
//->it use for to do some operation on specific number from the array 
//-> return new array
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let lucky = words.filter((word)=>{
	return word.length > 6
});

console.log("filter lucky number is ",lucky);
