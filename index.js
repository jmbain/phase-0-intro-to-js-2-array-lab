// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// Define destructivelyAppendCat(name) which appends a cat to the end of the cats array:
function destructivelyAppendCat(name) {
    cats.push(name);
}
// Define destructivelyPrependCat(name) which prepends a cat to the beginning of the cats array:
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
// Define destructivelyRemoveLastCat() which removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}
// Define destructivelyRemoveFirstCat() which removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}
// Define appendCat(name) which appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
   const appendedCats = [...cats, name];
   return appendedCats;
}
// Define prependCat(name) which prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
   const prependedCats = [name, ...cats];
   return prependedCats;
}
// Define removeLastCat() which removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const copyCats = cats.slice();
    const lastCatRemoved = copyCats.splice(0, copyCats.length - 1);
    return lastCatRemoved;
}
// Define  removeFirstCat() which removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const copyMoreCats = cats.slice();
    const firstCatRemoved = copyMoreCats.splice(1, 2);
    return firstCatRemoved;
}