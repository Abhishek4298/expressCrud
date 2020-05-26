let pets = ["dog", "cat", "elephant"];

pets.new = "cow";
console.log("pets new", typeof pets.new);

//*forEach loop
//->that itterate every element one by one
//->Expected to work with arrays
//->Callback function is used

pets.forEach((pet) => {
  console.log("pets :", pet);
});

//*forIn loop
//->it Returns the index number
//->it also add the newly created object value  that is pets.new
for (id in pets) {
  console.log("id of pet is", id);
  console.log("pets :", pets[id]);
}
//forOf loop
//->its a new way to iterating collections
//->introduced in es6
for (pet of pets) {
  console.log("for of:", pet);
}
